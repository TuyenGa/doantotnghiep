const Photos = require('../models/Photo');

module.exports = {
  addNewPhoto: async (ctx) => {
    try {
      const path = ctx.req.file ? ctx.req.file.path : '';
      const name = ctx.req.file ? ctx.req.file.originalname : ''
      const data = {path, name}
      const addNewPhoto = await Photos.addNewPhoto(data)
        ctx.status = 200
        ctx.body = {newPhoto: addNewPhoto, Msg: 'Ok'}
    } catch (error) {
      ctx.status = 404
      ctx.body = {Msg: error.message}
    }
  }
};
