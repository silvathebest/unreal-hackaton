import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model} from 'sequelize'
import {sequelize} from '../db'

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<number>,
  login: string,
  password: string
}

export enum ConformityEnum {
  CORRESPONDING = 1,
  ADDITIONAL,
  PARTIALLY
}

export enum PositionEnum {
  CARDIOLOGY = 'врач-кардиолог',
  NEUROLOGY = 'врач-невролог',
  OTOLARYNGOLOGY = 'врач-оториноларинголог'
}


export interface ReportModel extends Model<InferAttributes<ReportModel>, InferCreationAttributes<ReportModel>> {
  id: CreationOptional<number>
  name: string
  icon: string
  userId: number
  status: number
  count: number
  uploadStatus: boolean,
  conformityChart: object,
  neurologyChart: object,
  cardiologyChart: object,
  otolaryngologyChart: object
}


interface ReportDataModel extends Model<InferAttributes<ReportDataModel>, InferCreationAttributes<ReportDataModel>> {
  id: CreationOptional<number>,
  gender: string,
  clientDateBirth: Date,
  clientId: number,
  idMKB: string,
  diagnosis: string,
  serviceDate: Date,
  position: string,
  appointments: string,
  conformity: number,
  reportId: number
}

export const User = sequelize.define<UserModel>('users', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  login: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING}
})

export const Report = sequelize.define<ReportModel>('reports', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
  icon: {type: DataTypes.STRING, allowNull: true},
  status: {type: DataTypes.INTEGER, defaultValue: 1},
  count: {type: DataTypes.INTEGER, defaultValue: 0},
  uploadStatus: {type: DataTypes.BOOLEAN},
  conformityChart: {type: DataTypes.JSONB},
  neurologyChart: {type: DataTypes.JSONB},
  cardiologyChart: {type: DataTypes.JSONB},
  otolaryngologyChart: {type: DataTypes.JSONB},
  userId: {
    type: DataTypes.INTEGER, references: {
      model: User,
      key: 'id'
    }
  }
})

User.hasMany(Report)
Report.belongsTo(User)


export const ReportData = sequelize.define<ReportDataModel>('reports_data', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  gender: {type: DataTypes.STRING},
  clientDateBirth: {type: DataTypes.DATE},
  clientId: {type: DataTypes.INTEGER},
  idMKB: {type: DataTypes.STRING},
  diagnosis: {type: DataTypes.STRING},
  serviceDate: {type: DataTypes.DATE},
  position: {type: DataTypes.STRING},
  appointments: {type: DataTypes.TEXT},
  conformity: {type: DataTypes.INTEGER},
  reportId: {
    type: DataTypes.INTEGER, references: {
      model: Report,
      key: 'id'
    }
  }
})

Report.hasMany(ReportData)
ReportData.belongsTo(Report)