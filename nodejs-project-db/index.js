'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./modules/agent')
const setupMetricModel = require('./modules/metric')
const setupAgent = require('./lib/agent')
const defaults = require('defaults')

module.exports = async function (config) {
  // It helps for tests
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // Database Relations
  AgentModel.hasMany(MetricModel) // 0 -> *
  MetricModel.belongsTo(AgentModel) // 1 <-> 1

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Agent = setupAgent(AgentModel)
  const Metric = {}
  return {
    Agent,
    Metric
  }
}
