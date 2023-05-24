import Router from 'express'
import {uploadReport} from '../controllers/uploadController'
import authMiddleware from '../middleware/authMiddleware'

const router = Router()

router.post('/report', authMiddleware ,uploadReport)

export default router