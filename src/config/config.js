import dotenv from 'dotenv';

dotenv.config();

// console.log(
//   'dates .env -->',
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD, //'root',
//   process.env.DB_NAME,
//   process.env.DB_HOST, //'127.0.0.1',
//   'postgres'
// )

export default {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
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
