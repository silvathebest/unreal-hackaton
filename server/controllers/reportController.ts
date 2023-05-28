import {Request, Response} from 'express'
import {UserRequest} from '../middleware/authMiddleware'
import {Report, ReportModel} from '../models/models'
import {Op} from 'sequelize'

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

  const {id, name, status, uploadStatus, count, conformityChart, userId, icon} = report


  return res.status(200).json({id, name, status, uploadStatus, count, conformityChart, userId, icon} as ReportModel)
}