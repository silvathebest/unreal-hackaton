import Router from 'express'
import userRouter from './userRouter'
import uploadRouter from './uploadRouter'
import reportRouter from './reportRouter'
import reportDetailRouter from './reportDetailRouter'

const router = Router()

router.use('/user', userRouter)
router.use('/upload', uploadRouter)
router.use('/report', reportRouter)
router.use('/reportDetail', reportDetailRouter)

export default router