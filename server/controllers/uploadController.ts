import {Request, Response} from 'express'
import {readFile, utils} from 'xlsx'
import moment from 'moment'
import {ConformityEnum, PositionEnum, Report, ReportData, User} from '../models/models'
import {UserRequest} from '../middleware/authMiddleware'
import * as fs from 'fs'

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
    const filePath = `./static/${new Date().toJSON()}+${file.name}`

    // @ts-ignore
    file.mv(filePath)
    // @ts-ignore
    const workbook = readFile('./static/' + file.name)
    const workSheet = workbook.Sheets[workbook.SheetNames[0]]

    const user = await User.findOne({where: {id: typeReq.user.id}})
    if (!user) return res.status(400).json({
      status: 'failed',
      code: '400',
      message: 'User not found'
    })
    const json = utils.sheet_to_json(workSheet)

    const report = await Report.create({
      userId: user.id,
      name: req.body.name,
      icon: req.body.icon || '',
      uploadStatus: false,
      status: 1,
      count: json.length,
      conformityChart: {},
      neurologyChart: {},
      cardiologyChart: {},
      otolaryngologyChart: {}
    })

    res.status(200).send({reportId: report.id})

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
      // @ts-ignore
      item.conformity = Math.floor(Math.random() * 3 + 1) as ConformityEnum
    }

    // @ts-ignore
    await ReportData.bulkCreate(json)

    const count = json.length
    const cardiologyArray = getArrayByDepartment(json, PositionEnum.CARDIOLOGY)
    const cardiologyCount = cardiologyArray.length
    const neurologyArray = getArrayByDepartment(json, PositionEnum.NEUROLOGY)
    const neurologyCount = neurologyArray.length
    const otolaryngologyArray = getArrayByDepartment(json, PositionEnum.OTOLARYNGOLOGY)
    const otolaryngologyCount = otolaryngologyArray.length

    await report.update({
      uploadStatus: true,
      conformityChart: {
        count,
        contactingPercentage: 100,
        patientCount: getUniqueArrayLength(json, 'clientId'),
        specialistCount: getUniqueArrayLength(json, 'position'),
        correspondingCount: getConformityTypeArray(json, ConformityEnum.CORRESPONDING).length,
        correspondingPercent: getConformityPercent(json, ConformityEnum.CORRESPONDING, count),
        additionalAppointmentsCount: getConformityTypeArray(json, ConformityEnum.ADDITIONAL).length,
        additionalAppointmentsPercent: getConformityPercent(json, ConformityEnum.ADDITIONAL, count),
        partiallyCount: getConformityTypeArray(json, ConformityEnum.PARTIALLY).length,
        partiallyPercent: getConformityPercent(json, ConformityEnum.PARTIALLY, count)
      },
      cardiologyChart: {
        count: cardiologyCount,
        contactingPercentage: Math.round(cardiologyCount * 100 / count),
        patientCount: getUniqueArrayLength(cardiologyArray, 'clientId'),
        specialistCount: getUniqueArrayLength(cardiologyArray, 'position'),
        correspondingCount: getConformityTypeArray(cardiologyArray, ConformityEnum.CORRESPONDING).length,
        correspondingPercent: getConformityPercent(cardiologyArray, ConformityEnum.CORRESPONDING, cardiologyCount),
        additionalAppointmentsCount: getConformityTypeArray(cardiologyArray, ConformityEnum.ADDITIONAL).length,
        additionalAppointmentsPercent: getConformityPercent(cardiologyArray, ConformityEnum.ADDITIONAL, cardiologyCount),
        partiallyCount: getConformityTypeArray(cardiologyArray, ConformityEnum.PARTIALLY).length,
        partiallyPercent: getConformityPercent(cardiologyArray, ConformityEnum.PARTIALLY, cardiologyCount)
      },
      neurologyChart: {
        count: neurologyCount,
        contactingPercentage: Math.round(neurologyCount * 100 / count),
        patientCount: getUniqueArrayLength(neurologyArray, 'clientId'),
        specialistCount: getUniqueArrayLength(neurologyArray, 'position'),
        correspondingCount: getConformityTypeArray(neurologyArray, ConformityEnum.CORRESPONDING).length,
        correspondingPercent: getConformityPercent(neurologyArray, ConformityEnum.CORRESPONDING, neurologyCount),
        additionalAppointmentsCount: getConformityTypeArray(neurologyArray, ConformityEnum.ADDITIONAL).length,
        additionalAppointmentsPercent: getConformityPercent(neurologyArray, ConformityEnum.ADDITIONAL, neurologyCount),
        partiallyCount: getConformityTypeArray(neurologyArray, ConformityEnum.PARTIALLY).length,
        partiallyPercent: getConformityPercent(neurologyArray, ConformityEnum.PARTIALLY, neurologyCount)
      },
      otolaryngologyChart: {
        count: otolaryngologyCount,
        contactingPercentage: Math.round(otolaryngologyCount * 100 / count),
        patientCount: getUniqueArrayLength(otolaryngologyArray, 'clientId'),
        specialistCount: getUniqueArrayLength(otolaryngologyArray, 'position'),
        correspondingCount: getConformityTypeArray(otolaryngologyArray, ConformityEnum.CORRESPONDING).length,
        correspondingPercent: getConformityPercent(otolaryngologyArray, ConformityEnum.CORRESPONDING, otolaryngologyCount),
        additionalAppointmentsCount: getConformityTypeArray(otolaryngologyArray, ConformityEnum.ADDITIONAL).length,
        additionalAppointmentsPercent: getConformityPercent(otolaryngologyArray, ConformityEnum.ADDITIONAL, otolaryngologyCount),
        partiallyCount: getConformityTypeArray(otolaryngologyArray, ConformityEnum.PARTIALLY).length,
        partiallyPercent: getConformityPercent(otolaryngologyArray, ConformityEnum.PARTIALLY, otolaryngologyCount)
      }
    })

    fs.unlinkSync(filePath)
    return
  } catch (err) {
    return res.status(200).json({
      status: 'failed',
      code: '500',
      message: 'Internal server error'
    })
  }
}

const getUniqueArrayLength = (array: Array<any>, key: string) => Array.from(new Set(array.map(item => item[key]))).length

const getArrayByDepartment = (array: Array<any>, position: PositionEnum) => array.filter(item => item.position === position)

const getConformityTypeArray = (array: Array<any>, type: ConformityEnum) => array.filter(item => item.conformity === type)

const getConformityPercent = (array: Array<any>, type: ConformityEnum, count: number) =>
  Math.round(getConformityTypeArray(array, type).length * 100 / count)