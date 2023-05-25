import Router from 'express'
import {uploadReport} from '../controllers/uploadController'
import authMiddleware from '../middleware/authMiddleware'

const router = Router()

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
router.post('/report', authMiddleware, uploadReport)

export default router