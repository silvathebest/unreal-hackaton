import Router from 'express'
import {checkReportStatus, uploadReport} from '../controllers/uploadController'
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

/**
 * @openapi
 * tags:
 *  name: Report
 *  description: The report managing API
 * /api/upload/report:
 *   post:
 *     tags: [Report]
 *     description: Uploading report to server
 *     consumes:
 *          - multipart/form-data
 *     parameters:
 *          - in: formData
 *            name: report
 *            type: file
 *            description: The file to upload.
 *          - in: formData
 *            name: name
 *            type: string
 *            description: The file name.
 *          - in: formData
 *            name: icon
 *            type: string
 *            description: The file icon.
 *     responses:
 *       200:
 *         description: File in progress
 */
router.post('/upload', authMiddleware, uploadReport)

/**
 * @openapi
 * tags:
 *  name: Report
 *  description: The report managing API
 * /api/upload/report?id={reportId}:
 *   get:
 *     tags: [Report]
 *     description: Check report upload status
 *     responses:
 *       200:
 *         description: File in progress
 */
router.get('/status/:id', authMiddleware, checkReportStatus)
router.get('/', authMiddleware, getAll)

export default router