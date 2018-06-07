const {db} = require('../pgp')

class Detail {
  getListDetailRoom (id) {
    const sql = `
      SELECT
        detail.id,
        price,
        for_sale,
        sale,
        description,
        detail.address,
        time_range,
        features.bed_room,
        features.baths_room,
        features.coop,
        features.additional_storage,
        locations.latitude,
        locations.longitude,
        users.id user_id,
        users.name,
        users.email,
        users.phone,
        categories.type categories_type,
        categories.name

      FROM detail
      LEFT JOIN categories ON detail.categories_id = categories.id
      LEFT JOIN features ON detail.feature_id = features.id
      LEFT JOIN users ON detail.user_id = users.id
      LEFT JOIN locations ON detail.location_id = locations.id
      WHERE users.id = ${id}
    `
    return db.manyOrNone(sql)
  }
  create(data) {
    const sql = `
      INSERT INTO detail
      (price, for_sale, sale, description, address, time_range, user_id, location_id, categories_id, feature_id)
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      returning *
    `
    return db.one(sql,
      [
        data.price,
        data.for_sale,
        data.sale,
        data.description,
        data.address,
        data.time_range,
        data.user_id,
        data.location_id,
        data.categories_id,
        data.feature_id
    ])
  }

  update(data, id) {
    const sql = `
      UPDATE detail
      SET
        price=$1,
        for_sale=$2,
        sale=$3,
        description=$4,
        address=$5,
        time_range=$6
      WHERE detail.id = ${id}
      returning *
    `

    return db.one(sql,
      [
        data.price,
        data.for_sale,
        data.sale,
        data.description,
        data.address,
        data.time_range
      ])
  }

  findDetailByID(id) {
    const sql = `
      SELECT
        price,
        for_sale,
        sale,
        description,
        address,
        time_range
      FROM detail
      Where detail.id = ${id}
    `
    return db.oneOrNone(sql)
  }

  deleteDetail(id) {
    const sql = `
      DELETE FROM detail
      WHERE detail.id=${id}
      returning *
    `
    return db.one(sql)
  }

  getListBySearch (reqData) {
    let where = []

    if (reqData.priceMin && reqData.priceMax)
      where.push(`detail.price > ${reqData.priceMin} and detail.price < ${reqData.priceMax}`)

    if (reqData.address)
      where.push(`detail.address Like '%${reqData.address}%'`)

    if (reqData.coop)
      where.push(`features.coop = ${reqData.coop}`)

    if (reqData.cateType)
      where.push(`categories.type = '${reqData.cateType}'`)

    where = where.join(' AND ')

    if(where) {
      where = 'WHERE ' + where
    }
    const sql = `
      SELECT
        detail.id,
        price,
        for_sale,
        sale,
        description,
        detail.address,
        time_range,
        features.bed_room,
        features.baths_room,
        features.coop,
        features.additional_storage,
        locations.latitude,
        locations.longitude,
        users.id user_id,
        users.name,
        users.email,
        users.phone,
        categories.type categories_type,
        categories.name

      FROM detail
      LEFT JOIN categories ON detail.categories_id = categories.id
      LEFT JOIN features ON detail.feature_id = features.id
      LEFT JOIN users ON detail.user_id = users.id
      LEFT JOIN locations ON detail.location_id = locations.id
      ${where}
    `
    return db.manyOrNone(sql)
  }
}

module.exports = new Detail()
