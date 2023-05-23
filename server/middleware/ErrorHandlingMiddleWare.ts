import {ApiError} from '../error/ApiError'
import {Request, Response, NextFunction} from 'express'

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message)
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message})
  }

  return res.status(500).json({message: 'Unexpected error'})
}