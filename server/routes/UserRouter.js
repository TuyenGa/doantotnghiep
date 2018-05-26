const userController = require('../controllers/UserController')

module.exports = (router) => {

  router.get('/users', userController.index)

  router.post('/login', userController.login)

  router.post('/register', userController.register)

  return router
}
