import Router from 'express'
import {registration, login} from '../controllers/userController'

const router = Router()

/**
 * @openapi
 * tags:
 *  name: User
 *  description: The user managing API
 */

/**
 * @openapi
 * /api/user/registration:
 *   post:
 *     tags: [User]
 *     description: Registration user
 *     consumes:
 *          - json
 *     parameters:
 *          - in: string
 *            name: login
 *            type: sting
 *            description: user login
 *          - in: string
 *            name: password
 *            type: sting
 *            description: user password
 *     responses:
 *       200:
 *         description: user in registration
 */
router.post('/registration', registration)

/**
 * @openapi
 * /api/user/login:
 *   post:
 *     tags: [User]
 *     description: Login user
 *     consumes:
 *          - json
 *     parameters:
 *          - in: string
 *            name: login
 *            type: sting
 *            description: user login
 *          - in: string
 *            name: password
 *            type: sting
 *            description: user password
 *     responses:
 *       200:
 *         description: user in login
 */
router.post('/login', login)

export default router