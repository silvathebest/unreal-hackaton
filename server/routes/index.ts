import Router from 'express'
import userRouter from './userRouter'
import reportRouter from './reportRouter'

const router = Router()

router.use('/user', userRouter)
router.use('/report', reportRouter)

export default router