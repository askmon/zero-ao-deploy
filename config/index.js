require('./dotenv-loader').load(process.env.NODE_ENV)

const database = require('./database')
const server = require('./server')
const crypto = require('./crypto')
const firebase = require('./firebase')

module.exports = {
  database,
  server,
  crypto,
  firebase,
}
