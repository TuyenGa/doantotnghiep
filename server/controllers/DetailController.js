const Detail = require('../models/Detail')

class DetailController {
  async getDetail({params, response}) {
    try {
      const id = params.id
      const dataDetail = await Detail.getListDetailRoom(id)
      response.status = 200
      response.body = {dataDetail, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }

  async create ({request, response}) {
    try {
      const data = request.body
      data.user_id = 1
      const newDetail = await Detail.create(data)
      response.status = 200
      response.body = {newDetail, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }

  async update ({params, request, response}) {
    try {
      const id = params.id
      const currentData = await Detail.findDetailByID(id)
      const data = {
        price: request.body.price || currentData.price,
        for_sale: request.body.for_sale || currentData.for_sale,
        sale: request.body.sale || currentData.sale,
        description: request.body.description || currentData.description,
        address: request.body.address || currentData.address,
        time_range: request.body.time_range || currentData.time_range
      }

      const updateData = await Detail.update(data, id)

      response.status = 200
      response.body = {updateData, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }

  async delete({params, response}) {
    try {
      const id = params.id
      const deleteData = await Detail.deleteDetail(id)

      response.status = 200
      response.body = {deleteData, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }

  async search({query, response}) {
    try {
      let reqData = query
      reqData.priceMin = parseInt(reqData.priceMin) || ''
      reqData.priceMax = parseInt(reqData.priceMax) || ''
      reqData.address = reqData.address || ''
      reqData.coop = reqData.coop || ''
      reqData.cateType = parseInt(reqData.cateType) || 1

      let listData = await Detail.getListBySearch(reqData)
      response.status = 200
      response.body = {listData, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  }
}

module.exports = new DetailController()
