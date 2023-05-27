import { Request, Response} from 'express'
import {UserRequest} from '../middleware/authMiddleware'
import {Report} from '../models/models'
import {Op} from 'sequelize'

export const getAll = async (req: Request, res: Response) => {
  const {user} = req as UserRequest
  const {filter} = req.query

  let reports

  if (filter) {
    reports = await Report.findAll({where: {[Op.and]: [
      {userId: user.id},
      {name: {[Op.iLike]: `%${filter}%`}}
    ]}})
  } else {
    reports = await Report.findAll({where: {userId: user.id}})
  }

  res.json({data: reports})
}