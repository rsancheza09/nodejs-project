'use strict'

const debug = require('debug')('nodejs-project:db:setup')
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'nodejsproject',
    username: process.env.DB_USER || 'nodejsproject',
    password: process.env.DB_PASS || 'admin',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres', // Very important for Sequelize
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()