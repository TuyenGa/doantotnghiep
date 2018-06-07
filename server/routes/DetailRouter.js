const DetailController = require('../controllers/DetailController')

module.exports = (router) => {

  router.get('/details/:user_id/show', DetailController.getDetail)

  router.post('/details', DetailController.create)

  router.put('/details/:id/update', DetailController.update)

  router.delete('/details/:id/delete', DetailController.delete)

  router.get('/search', DetailController.search)
  
  return router
}