import Router from 'express'
import {getAll} from '../controllers/reportController'
import authMiddleware from '../middleware/authMiddleware'

const router = Router()

/**
 * @openapi
 * /api/report:
 *   get:
 *     tags: [Report]
 *     description: Get all reports
 *     parameters:
 *          - in: string
 *            name: filter
 *            type: sting
 *            description: filter
 *     responses:
 *       200:
 *         description: Get all reports
 */
router.get('/', authMiddleware, getAll)

export default router