import Router from 'express'
import userRouter from './userRouter'
import uploadRouter from './uploadRouter',
import reportRouter from './reportRouter'

const router = Router()

router.use('/user', userRouter)
router.use('/upload', uploadRouter)
router.use('/report', reportRouter)

export default router