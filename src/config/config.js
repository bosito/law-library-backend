import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_USERNAME,'root',process.env.DB_NAME,process.env.DB_HOST,'postgres')

export default {
  development: {
    username: 'postgres',//process.env.DB_USERNAME,
    password: 'root',//process.env.DB_PASSWORD,
    database: 'lawlibrary',//process.env.DB_NAME,
    host: '127.0.0.1',//process.env.DB_HOST,
    dialect: "postgres"
  },
  test: {
    username: 'test',
    password: null,
    database: 'mysql',
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  production: {
    username: 'test',
    password: null,
    database: 'mysql',
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
};
