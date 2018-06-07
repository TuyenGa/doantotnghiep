const ResumeController = require('../controllers/ResumeController')

module.exports = (router) => {

  router.post('/resumes', ResumeController.addResume)

  router.put('/resumes/:id/update', ResumeController.updateResume)

  return router
}