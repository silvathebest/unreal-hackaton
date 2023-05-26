import Router from 'express'
import {getAll} from '../controllers/reportDetailController'
import authMiddleware from '../middleware/authMiddleware'

const router = Router()


/**
 * @openapi
 * tags:
 *  name: ReportDetail
 *  description: The report detail managing API
 * /api/reportDetail:
 *   get:
 *     tags: [ReportDetail]
 *     description: Get report detail
 *     parameters:
 *          - in: string
 *            name: filter
 *            type: string
 *            description: filter
 *          - in: number
 *            name: page
 *            type: number
 *            description: page
 *          - in: number
 *            name: limit
 *            type: number
 *            description: limit
 *          - in: number
 *            name: reportId
 *            type: number
 *            description: reportId
 *     responses:
 *       200:
 *         description: Get report detail
 */
router.get('/', authMiddleware, getAll)

export default router