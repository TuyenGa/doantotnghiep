const PhotosController = require('../controllers/PhotoController');
module.exports = (router, upload) => {

  router.post('/photos/upload', upload.single('photos'), PhotosController.addNewPhoto);

  return router
};
