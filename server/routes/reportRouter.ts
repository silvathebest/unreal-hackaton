import Router from 'express'
import {uploadReport} from '../controllers/uploadController'
import {checkReportStatus, exportReport, getAll, getReport} from '../controllers/reportController'
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
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  enum: ['created', 'in-progress']
 */
router.get('/status/:id', authMiddleware, checkReportStatus)

/**
 * @openapi
 * tags:
 *  name: Report
 *  description: The report managing API
 * /api/report:
 *   get:
 *     tags: [Report]
 *     description: Get all reports
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *                 type: array
 *                 items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                        description: The report ID.
 *                      name:
 *                        type: string
 *                        description: The report's name.
 *                      icon:
 *                        type: string
 *                        description: The report's icon.
 *                      userId:
 *                        type: integer
 *                        description: The report's userId.
 *                      status:
 *                        type: integer
 *                        description: The report's status.
 *                      count:
 *                        type: integer
 *                        description: The report's count.
 *                      uploadStatus:
 *                        type: boolean
 *                        description: The report's upload status. True if uploaded
 *                      conformityChart:
 *                        type: object
 *                        description: data for conformity chart
 *                      neurologyChart:
 *                        type: object
 *                        description: data for conformity chart
 *                      cardiologyChart:
 *                        type: object
 *                        description: data for cardiology chart
 *                      otolaryngologyChart:
 *                        type: object
 *                        description: data for otolaryngology chart
 */

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
 *                     description: The report ID.
 *                   name:
 *                     type: string
 *                     description: The report's name.
 *                   icon:
 *                     type: string
 *                     description: The report's icon.
 *                   userId:
 *                     type: integer
 *                     description: The report's userId.
 *                   status:
 *                     type: integer
 *                     description: The report's status.
 *                   count:
 *                     type: integer
 *                     description: The report's count.
 *                   uploadStatus:
 *                     type: boolean
 *                     description: The report's upload status. True if uploaded
 *                   conformityChart:
 *                     type: object
 *                     description: data for conformity chart
 *                   neurologyChart:
 *                     type: object
 *                     description: data for conformity chart
 *                   cardiologyChart:
 *                     type: object
 *                     description: data for cardiology chart
 *                   otolaryngologyChart:
 *                     type: object
 *                     description: data for otolaryngology chart
 */
router.get('/:id', authMiddleware, getReport)

router.get('/export/:id', authMiddleware, exportReport)

export default router