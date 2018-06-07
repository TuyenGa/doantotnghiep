const {db} = require('../pgp')

class Feature {
  addNewFeature (data) {
    const sql = `
      INSERT INTO features
      (bed_room, baths_room, coop, additional_storage)
      VALUES
      ($1, $2, $3, $4)
      returning *
    `
    return db.one(sql, [data.bed_room, data.baths_room, data.coop, data.additional_storage])
  }
  updateFeature (data, id) {
    const sql = `
      UPDATE features
      SET
        bed_room=$1,
        baths_room=$2,
        coop=$3,
        additional_storage=$4
      where features.id = ${id}
      returning *
    `
    return db.one(sql, [data.bed_room, data.baths_room, data.coop, data.additional_storage])
  }
  findFeatureByID (id) {
    const sql = `
      SELECT
        bed_room,
        baths_room,
        coop,
        additional_storage
      FROM features
      Where features.id = ${id}
    `
    return db.one(sql)
  }
}

module.exports = new Feature()