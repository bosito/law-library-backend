// import dotenv from 'dotenv';
// dotenv.config();

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
