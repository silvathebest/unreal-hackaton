import {Sequelize} from "sequelize"
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'postgres',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT)
    }
)