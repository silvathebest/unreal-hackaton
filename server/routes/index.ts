import Router from 'express'
import userRouter from './userRouter'
import uploadRouter from './uploadRouter'

const router = Router()

router.use('/user', userRouter)
router.use('/upload', uploadRouter)

export default router