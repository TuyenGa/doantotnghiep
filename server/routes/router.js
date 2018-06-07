module.exports = (router, upload) => {

  require('./UserRouter')(router)

  require('./PhotosRouter')(router, upload)

  require('./LocationRouter')(router)

  require('./ResumeRouter')(router)

  require('./FeatureRouter')(router)

  require('./DetailRouter')(router)

  return router
}