const {db} = require('../pgp');

class Photo {
  addNewPhoto(data) {
    const sql = `
      insert into photos
      (path, name)
      values
      ($1, $2)
      returning *
    `
    return db.one(sql, [data.path, data.name]);
  }
}

module.exports = new Photo();
