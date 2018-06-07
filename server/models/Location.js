const {db} = require('../pgp');

class Location {
  addLocation (data) {
    const sql = `
      Insert into locations
      (latitude, longitude)
      Values
      ($1, $2)
      returning *
    `
    return db.one(sql, [data.latitude, data.longitude])
  }
  updateLocation (data, id) {
    const sql = `
      Update locations
      Set
      latitude=$1,
      longitude=$2
      where id=${id}
      returning *
    `
    return db.one(sql, [data.latitude, data.longitude])
  }
};

module.exports = new Location();
