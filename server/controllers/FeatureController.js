const Feature = require('../models/Feature')

class FeatureController {
  async addNewFeature ({request, response}) {
    try {
      const bed_room = request.body.bed_room,
        baths_room = request.body.baths_room,
        coop = request.body.coop,
        additional_storage = request.body.additional_storage

      const data = {
        bed_room,
        baths_room,
        coop,
        additional_storage
      }

      const newFeature = await Feature.addNewFeature(data)

      response.status = 200
      response.body = {newFeature, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }
  async updateFeature ({params, request, response}) {
    try {
      const id = params.id
      const currentFeature = await Feature.findFeatureByID(id)

      const bed_room = request.body.bed_room || currentFeature.bed_room,
        baths_room = request.body.baths_room || currentFeature.baths_room,
        coop = request.body.coop || currentFeature.coop,
        additional_storage = request.body.additional_storage || currentFeature.additional_storage

      const data = {
        bed_room,
        baths_room,
        coop,
        additional_storage
      }

      const updateFeature = await Feature.updateFeature(data, id)

      response.status = 200
      response.body = {
        updateFeature,
        Msg: 'Ok'
      }
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }
}

module.exports = new FeatureController()
