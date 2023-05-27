import {Request, Response} from 'express'
import {readFile, utils} from 'xlsx'
import moment from 'moment'
import {Report, ReportData, User} from '../models/models'
import {UserRequest} from '../middleware/authMiddleware'

const replaceKeys = (object: Record<string, string>, old_key: string, new_key: string) => {
  delete Object.assign(object, {[new_key]: object[old_key]})[old_key]
}

export const uploadReport = async (req: Request, res: Response) => {
  const typeReq = req as UserRequest
  try {
    const file = req.files?.report
    if (!file) {
      return res.status(400).json({
        status: 'failed',
        code: '400',
        message: 'Please upload file'
      })
    }

    // @ts-ignore
    file.mv('./static/' + file.name)
    // @ts-ignore
    const workbook = readFile('./static/' + file.name)
    const workSheet = workbook.Sheets[workbook.SheetNames[0]]

    const user = await User.findOne({where: {id: typeReq.user.id}})
    if (!user) return res.status(400).json({
      status: 'failed',
      code: '400',
      message: 'User not found'
    })

    const report = await Report.create({
      userId: user.id,
      name: req.body.name,
      icon: req.body.icon || '',
      uploadStatus: false,
      status: 1
    })

    res.status(200).send({reportId: report.id})

    const json = utils.sheet_to_json(workSheet)
    for (const item of json) {
      const typedItem = item as Record<string, string>
      replaceKeys(typedItem, 'Пол пациента', 'gender')
      replaceKeys(typedItem, 'Дата рождения пациента', 'clientDateBirth')
      replaceKeys(typedItem, 'ID пациента', 'clientId')
      replaceKeys(typedItem, 'Код МКБ-10', 'idMKB')
      replaceKeys(typedItem, 'Диагноз', 'diagnosis')
      replaceKeys(typedItem, 'Дата оказания услуги', 'serviceDate')
      replaceKeys(typedItem, 'Должность', 'position')
      replaceKeys(typedItem, 'Назначения', 'appointments')
      // @ts-ignore
      item.clientDateBirth = moment(item.clientDateBirth, 'DD.MM.YYYY', 'ru').toJSON()
      // @ts-ignore
      item.serviceDate = moment(item.serviceDate, 'DD.MM.YYYY', 'ru').toJSON()
      // @ts-ignore
      item.reportId = report.id
    }

    // @ts-ignore
    await ReportData.bulkCreate(json)
    await report.update({uploadStatus: true})

    return
  } catch (err) {
    return res.status(200).json({
      status: 'failed',
      code: '500',
      message: 'Internal server error'
    })
  }
}

export const checkReportStatus = async (req: Request, res: Response) => {
  const reportId = req.query.id
  if (!reportId) return res.status(400).json({
    status: 'failed',
    code: '400',
    message: 'No query params'
  })

  const report = await Report.findOne({where: {id: Number(reportId)}})

  if (!report) return res.status(400).json({
    status: 'failed',
    code: '400',
    message: 'No report with current id'
  })

  return res.status(200)
    .send({status: report.uploadStatus ? 'created' : 'in-progress'})
}