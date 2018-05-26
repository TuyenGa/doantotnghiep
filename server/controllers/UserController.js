const User = require('../models/User')
const bcrypt = require('bcryptjs')
module.exports = {
  index: async ctx => {
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
        const user = await User.login()
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
          name: ctx.request.body.name
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
  }
}