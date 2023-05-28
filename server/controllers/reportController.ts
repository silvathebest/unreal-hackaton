import {Request, Response} from 'express'
import {UserRequest} from '../middleware/authMiddleware'
import {ConformityEnum, Report, ReportData, ReportModel} from '../models/models'
import {Op} from 'sequelize'
import {utils, writeFile} from 'xlsx'
import moment from 'moment'
import path from 'path'


export const getAll = async (req: Request, res: Response) => {
  const {user} = req as UserRequest
  const {filter} = req.query

  let reports

  if (filter) {
    reports = await Report.findAll({
      where: {
        [Op.and]: [
          {userId: user.id},
          {name: {[Op.iLike]: `%${filter}%`}}
        ]
      }
    })
  } else {
    reports = await Report.findAll({where: {userId: user.id}})
  }

  res.json({data: reports})
}


export const checkReportStatus = async (req: Request, res: Response) => {
  const reportId = req.params.id

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

export const getReport = async (req: Request, res: Response) => {
  const typedReq = req as UserRequest
  const reportId = req.params.id
  if (!reportId) return res.status(400).json({
    status: 'failed',
    code: '400',
    message: 'No query params'
  })

  const report = await Report.findOne({where: {id: Number(reportId), userId: typedReq.user.id}})

  if (!report) return res.status(400).json({
    status: 'failed',
    code: '400',
    message: 'No report with current id'
  })

  const {
    id,
    name,
    status,
    uploadStatus,
    count,
    conformityChart,
    cardiologyChart,
    otolaryngologyChart,
    neurologyChart,
    userId,
    icon
  } = report


  return res.status(200).json({
    id,
    name,
    status,
    uploadStatus,
    count,
    conformityChart,
    cardiologyChart,
    otolaryngologyChart,
    neurologyChart,
    userId,
    icon
  } as ReportModel)
}

export const exportReport = async (req: Request, res: Response) => {
  const typedReq = req as UserRequest
  const reportId = Number(req.params.id)

  if (!reportId) return res.status(400).json({
    status: 'failed',
    code: '400',
    message: 'No query params'
  })

  const report = await Report.findOne({where: {id: Number(reportId), userId: typedReq.user.id}})

  if (!report) return res.status(400).json({
    status: 'failed',
    code: '400',
    message: 'No report with current id'
  })

  const reportDetails = await ReportData.findAll({where: {reportId}})
  const data = reportDetails.map(item => ({
    'Соответствие': getConformity(item.conformity),
    'Пол пациента': item.gender,
    'Дата рождения пациента': parseDate(item.clientDateBirth),
    'ID пациента': item.clientId,
    'Диагноз': item.diagnosis,
    'Дата оказания услуги': parseDate(item.serviceDate),
    'Должность': item.position,
    'Назначения': item.appointments
  }))

  const workSheet = utils.json_to_sheet(data)
  const workBook = utils.book_new()
  utils.book_append_sheet(workBook, workSheet, 'Sheet 1')
  const fileName = `export+${new Date().toJSON()}+${report.name}.xlsx`
  writeFile(workBook, `./static/${fileName}`)
  const filePath = path.join(__dirname, '../../static/', fileName)


  return res.status(200).sendFile(filePath)
}

const getConformity = (id: ConformityEnum) => {
  switch (id) {
    case ConformityEnum.CORRESPONDING:
      return 'Соответствует'
    case ConformityEnum.ADDITIONAL:
      return 'Доп. назначения'
    case ConformityEnum.PARTIALLY:
      return 'Частично соответствуют'
  }
}

const parseDate = (date: Date) => moment(date).locale('ru').format('DD.MM.YYYY')