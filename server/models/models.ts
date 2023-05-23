import {DataTypes, Model} from 'sequelize'
import {sequelize} from '../db'

export class User extends Model {
  declare id: number
  declare login: string
  declare password: string
}

export class Report extends Model {
  declare id: number
  declare userId: number
}
export class ReportData extends Model {
  declare id: number
  declare gender: boolean
  declare clientDateBirth: Date
  declare clientId: number
  declare idMKB: string
  declare diagnosis: string
  declare serviceDate: Date
  declare position: string
  declare appointments: string
}

User.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
  },
  {
    tableName: 'users',
    sequelize
  })

Report.init({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  userId: {type: DataTypes.INTEGER},
}, {
  tableName: 'reports',
  sequelize
})

ReportData.init({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  reportId: {type: DataTypes.INTEGER},
  gender: {type: DataTypes.STRING},
  clientDateBirth: {type: DataTypes.DATE},
  clientId: {type: DataTypes.INTEGER},
  idMKB: {type: DataTypes.STRING},
  diagnosis: {type: DataTypes.STRING},
  serviceDate: {type: DataTypes.DATE},
  position: {type: DataTypes.STRING},
  appointments: {type: DataTypes.STRING}
}, {
  tableName: 'reports_data',
  sequelize
})