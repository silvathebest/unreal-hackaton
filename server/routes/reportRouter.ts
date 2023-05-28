import Router from 'express'
import {uploadReport} from '../controllers/uploadController'
import {checkReportStatus, getAll, getReport} from '../controllers/reportController'
import authMiddleware from '../middleware/authMiddleware'

const router = Router()

/**
 * @openapi
 * tags:
 *  name: Report
 *  description: The report managing API
 * /api/report/upload:
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
 * /api/report/status/{reportId}:
 *   get:
 *     tags: [Report]
 *     description: Check report upload status
 *     responses:
 *       200:
 *         description: File in progress
 */
router.get('/status/:id', authMiddleware, checkReportStatus)
router.get('/', authMiddleware, getAll)
/**
 * @openapi
 * tags:
 *  name: Report
 *  description: The report managing API
 * /api/report/{reportId}:
 *   get:
 *     tags: [Report]
 *     description: get one report
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID.
 *                   username:
 *                     type: string
 *                     description: The user name.
 */
router.get('/:id', authMiddleware, getReport)

export default router