const {db} = require('../pgp')

class Resume {
  addResume (data) {
    const sql = `
      insert into resume
      (
        smoking,
        pets,
        income,
        tenants,
        employer,
        job_type
      )
      Values
      (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6
      )
      returning *
    `
    return db.one(sql,
    [
      data.smoking,
      data.pets,
      data.income,
      data.tenants,
      data.employer,
      data.job_type
    ])
  }

  updateResume (data, id) {
    const sql =  `
      update resume
      set
      smoking=$1,
      pets=$2,
      income=$3,
      tenants=$4,
      employer=$5,
      job_type=$6
      where resume.id=${id}
      returning *
    `
    return db.one(sql,
      [
        data.smoking,
        data.pets,
        data.income,
        data.tenants,
        data.employer,
        data.job_type
      ])
  }
  findResumeByID (id) {
    const sql = `
      select
        id,
        smoking,
        pets,
        income,
        tenants,
        employer,
        job_type
      from resume
      where resume.id = ${id}
    `
    return db.oneOrNone(sql)
  }
}

module.exports = new Resume()
