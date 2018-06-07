const {db} = require ('../pgp');

class Users {
  index () {
    const sql = `
      Select
        id,
        email,
        name,
        phone,
        address,
        resume_id,
        created_at
      From users
    `
    return db.manyOrNone(sql)
  }
  login (data) {
    const sql = `
      Select
        id,
        email,
        password,
        name
      From users
      where email=$1 and password=$2
    `
    return db.oneOrNone(sql, [data.email, data.password])
  }
  register (data) {
    const sql = `
      insert into users (email, password, salt, name, address, phone, resume_id)
      values
      ($1, $2, $3, $4, $5, $6, $7)
      returning *
    `
    return db.one(sql,[data.email, data.password, data.salt, data.name, data.address, data.phone, data.resume_id])
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
  update (data, id) {
    console.log(data)
    const sql = `
      Update users
      set
        email=$1,
        name=$2,
        address=$3,
        phone=$4,
        resume_id=$5
      where id=${id}
      returning *
    `
    return db.one(sql, [data.email, data.name, data.address, data.phone, data.resume_id])
  }
  updatePassword (data, id) {
    const sql = `
      UPDATE users
      SET
        password=$1,
        salt=$2
      Where id=${id}
      returning password, salt
    `
    return db.one(sql, [data.hash, data.salt])
  }
  findUserById (id) {
    const sql = `
      Select
        email,
        password,
        name,
        address,
        phone,
        resume_id
      From users
      Where id=${id}
    `
    return db.oneOrNone(sql)
  }
  showDetail (id) {
    const sql =  `
      select
      users.id,
        users.email,
        users.name,
        users.address,
        users.phone,
        resume.smoking,
        resume.pets,
        resume.income,
        resume.tenants,
        resume.employer,
        resume.job_type
      from users
      left join resume on resume.id = users.resume_id
      where users.id=${id}
    `
    console.log(sql);
    return db.one(sql)
  }
}

module.exports = new Users()