module.exports = (router) => {

  require('./UserRouter')(router)

  require('./TestRouter')(router)

  return router
}