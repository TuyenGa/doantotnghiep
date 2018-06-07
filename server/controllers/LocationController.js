const Location = require('../models/Location')

class LocationController {
  async addNewLocation ({request, response}) {
    try {
      const latitude = request.body.latitude
      const longitude = request.body.longitude
      const data = {latitude, longitude}
      const addNewLocation = await Location.addLocation(data)
      response.body = {addNewLocation, Msg: 'Ok'}
    } catch (error) {
      response.body = {Msg: error.message}
    }
  }
  async updateLocation ({params, request, response}) {
    try {
      const id = params.id
      const latitude = request.body.latitude
      const longitude = request.body.longitude
      const data = {latitude, longitude}
      const updateLocation = await Location.updateLocation(data, id)
        response.status = 200
        response.body = {updateLocation, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }
};

module.exports = new LocationController()
