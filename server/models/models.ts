import {DataTypes, Model, ModelDefined, Optional} from 'sequelize'
import {sequelize} from '../db'

export class User extends Model {
  declare id: number;
  declare login: string;
  declare password: string;
}

User.init(
  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
  },
  {
    tableName: 'users',
    sequelize,
  },
);