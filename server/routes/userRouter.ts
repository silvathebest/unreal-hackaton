import Router from 'express'
import {registration, login, check} from '../controllers/userController'

const router = Router()

router.post('/registration', registration)
router.post('/login', login)
router.get('/auth', check)

export default router