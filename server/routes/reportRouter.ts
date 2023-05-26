import Router from 'express'
import {getAll} from '../controllers/reportController'
import authMiddleware from '../middleware/authMiddleware'

const router = Router()

router.get('/', authMiddleware, getAll)

export default router