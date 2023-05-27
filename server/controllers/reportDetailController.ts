import { Request, Response} from 'express'
import {ReportData} from '../models/models'
import {Op} from 'sequelize'

export const getAll = async (req: Request, res: Response) => {
  const {reportId, filter} = req.query
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const offset = page * limit - limit

  let where
  if (filter) {
    where = {[Op.and]: [
      {reportId: Number(reportId)},
      {[Op.or]: [
        {diagnosis: {[Op.iLike]: `%${filter}%`}},
        {appointments: {[Op.iLike]: `%${filter}%`}}
      ]}
    ]}
  } else {
    where = {reportId: Number(reportId)}
  }

  const reportDetails = await ReportData.findAll({limit, offset, where})
  const count = await ReportData.count({where})

  res.json({data: reportDetails, count})
}