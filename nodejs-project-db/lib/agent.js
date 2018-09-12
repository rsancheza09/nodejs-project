'use strict'

module.exports = function setupAgentService (AgentModel) {
  function findById (id) {
    return AgentModel.findById(id)
  }

  return {
    findById
  }
}
