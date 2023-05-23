import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import errorHandler from './middleware/ErrorHandlingMiddleWare'
import path from 'path'
import {sequelize} from './db'
import './models/models'
import router from './routes/index'

dotenv.config()
const port = process.env.PORT || 8080

const app: Express = express()
app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.static(path.resolve(__dirname, '../static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)


const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
    })
  } catch (e) {
    console.error(e)
  }
}

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

start().catch(console.error)