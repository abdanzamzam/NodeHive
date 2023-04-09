const { config } = require('dotenv')
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` })

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_DIALECT } = process.env

module.exports = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  dialect: DB_DIALECT
}
