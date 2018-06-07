const LocationController = require('../controllers/LocationController')

module.exports = (router) => {
  router.post('/locations', LocationController.addNewLocation)

  router.put('/locations/:id/update', LocationController.updateLocation)

  return router
}