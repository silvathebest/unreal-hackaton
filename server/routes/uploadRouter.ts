import Router from 'express'
import {uploadReport} from '../controllers/uploadController'

const router = Router()

router.post('/report', uploadReport)

export default router