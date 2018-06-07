const User = require('../models/User')
const bcrypt = require('bcryptjs')
module.exports = {
  getInfo: async ctx => {
    try {
      const listUser = await User.index();
      ctx.status = 200
      ctx.body = {
        listUser,
        msg: 'OK'
      }
    } catch (error) {
      ctx.status = 404
      ctx.body = {msg: error.message}
    }
  },
  login: async (ctx) => {
    try {
      const email = ctx.request.body.email
      const password = ctx.request.body.password
      const checkUser = await User.findUserByEmail(email);
      if (!checkUser) {
        ctx.status = 400
        ctx.body = {
          msg: 'Email is not exist!'
        }
      } else if (!bcrypt.compare(password, checkUser.password)) {
        ctx.status = 300
        ctx.body = {
          msg: 'Password was wrong'
        }
      } else {
        const data = {
          email: checkUser.email,
          password: checkUser.password
        }
        const user = await User.login(data)
        ctx.status = 200
          ctx.body = {
            user,
            msg: 'OK'
          }
      }
    } catch (error) {
      ctx.status = 404
      ctx.body = {
        msg: error.message
      }
    }
  },
  register: async ctx => {
    try {
      const email = ctx.request.body.email
      const password = ctx.request.body.password
      const repassword = ctx.request.body.repassword
      const checkEmail = await User.findUserByEmail(email)
      if (!!checkEmail) {
        ctx.staus = 300
        ctx.body = {
          msg: 'email is exist'
        }
      } else if (password !== repassword) {
        ctx.status = 301
        ctx.body = {
          msg: 'repassword is wrongs'
        }
      } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt);
        const user = {
          email,
          password: hash,
          salt,
          name: ctx.request.body.name,
          address: ctx.request.body.address,
          phone: ctx.request.body.phone,
          resume_id: ctx.request.body.resume_id
        }
        const registerUser = await User.register(user);
        ctx.status = 200
        ctx.body = {
          user: registerUser,
          msg: 'Ok'
        }
      }
    } catch (error) {
      ctx.status = 400
      ctx.body = {
        msg: error.message
      }
    }
  },
  update: async (ctx) => {
    try {
      const id = ctx.params.id
      let data = await User.findUserById(id)
      const email = ctx.request.body.email || data.email
      const name = ctx.request.body.name || data.name
      const address = ctx.request.body.address || data.address
      const phone = ctx.request.body.phone || data.phone
      const resume_id = ctx.request.body.resume_id || data.resume_id
      let dataUpdate = {
        email,
        name,
        address,
        phone,
        resume_id
      }
      const newUser = await User.update(dataUpdate, id)
      ctx.status = 200
      ctx.body = {newUser, Msg: 'Ok'}
    } catch (error) {
      ctx.status = 404
      ctx.body = {Msg: error.message}
    }
  },
  updatePassword: async (ctx) => {
    try {
      const id = ctx.params.id
      const checkData = await User.findUserById(id)
      const currentPassword = ctx.request.body.currentPassword
      const password = ctx.request.body.password
      const repassword = ctx.request.body.repassword
      if (!bcrypt.compareSync(currentPassword, checkData.password)) {
        ctx.status = 400
        ctx.body = {Msg: 'CurrentPassword went Wrong'}
      } else {
        if(password !== repassword) {
          ctx.status = 400
          ctx.body = {Msg: 'Repassword went wrong'}
        } else {
          const salt = bcrypt.genSaltSync(10)
          const hash = bcrypt.hashSync(password, salt)
          const data = {
            hash,
            salt
          }
          const newPassword = await User.updatePassword(data, id)
          ctx.status = 200
          ctx.body = {newPassword, Msg: 'Ok'}
        }
      }
    } catch (error) {
      ctx.status = 404
      ctx.body = {Msg: error.message}
    }
  },
  showDetail: async ({params, response}) => {
    try {
      const id = params.id
      const getInfoUser = await User.showDetail(id);
      response.status = 200
      response.body = {getInfoUser, Msg: 'Ok'}
    } catch (error) {
      response.status = 404
      response.body = {Msg: error.message}
    }
  },
}