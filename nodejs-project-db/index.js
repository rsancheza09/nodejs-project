'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./modules/agent')
const setupMetricModel = require('./modules/metric')

module.exports = async function (config) {
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

  const Agent = {}
  const Metric = {}
  return {
    Agent,
    Metric
  }
}
