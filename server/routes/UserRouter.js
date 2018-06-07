const userController = require('../controllers/UserController')

module.exports = (router) => {

  router.get('/users', userController.getInfo)

  router.post('/login', userController.login)

  router.post('/register', userController.register)

  router.put('/users/:id', userController.update)

  router.put('/users/:id/reset-password', userController.updatePassword)

  router.get('/users/:id/detail', userController.showDetail)

  return router
}
