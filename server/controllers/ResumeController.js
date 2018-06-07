const Resume = require('../models/Resume')

class ResumeController {
  async addResume ({request, response}) {
    try {
      const smoking = request.body.smoking,
        pets = request.body.pets || '',
        income = request.body.income || '',
        tenants = request.body.tenants || '',
        employer = request.body.employer || '',
        job_type = request.body.job_type || ''

      const data = {
        smoking,
        pets,
        income,
        tenants,
        employer,
        job_type
      }

      const newResume = await Resume.addResume(data)
      response.status = 200
      response.body = {newResume, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }

  async updateResume ({params, request, response}) {
    try {
      const id = params.id
      const  checkResume = await Resume.findResumeByID(id)
      const smoking = request.body.smoking || checkResume.smoking,
        pets = request.body.pets || checkResume.pets,
        income = request.body.income || checkResume.income,
        tenants = request.body.tenants || checkResume.tenants,
        employer = request.body.employer || checkResume.employer,
        job_type = request.body.job_type || checkResume.job_type
      const data = {
        smoking,
        pets,
        income,
        tenants,
        employer,
        job_type
      }
      const updateResume = await Resume.updateResume(data, id)

      response.status = 200
      response.body = {updateResume, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }
}

module.exports = new ResumeController()