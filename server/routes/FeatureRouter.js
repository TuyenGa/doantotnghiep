const FeatureController = require('../controllers/FeatureController')

module.exports = (router) => {

  router.post('/features', FeatureController.addNewFeature)

  router.put('/features/:id/update', FeatureController.updateFeature)

  return router
}