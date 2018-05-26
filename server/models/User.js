const {db} = require ('../pgp');

class Users {
  index () {
    const sql = `
      Select
        id,
        email,
        password,
        name
        created_at
      From users
    `
    return db.manyOrNone(sql)
  }
  login () {
    const sql = `
      Select
        id,
        email,
        password,
        name
      From users
    `
    return db.oneOrNone(sql)
  }
  register (data) {
    const sql = `
      insert into users (email, password, salt, name)
      values
      ($1, $2, $3, $4)
      returning *
    `
    return db.one(sql,[data.email, data.password, data.salt, data.name])
  }
  findUserByEmail (email) {
    const sql = `
      select
        id,
        email,
        password
      From users
      Where email = $1
    `
    return db.oneOrNone(sql, email)
  }
}

module.exports = new Users()