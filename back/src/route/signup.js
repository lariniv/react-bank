const express = require('express')

const router = express.Router()

const { UserClass } = require('../class/user.js')

const { Code } = require('../class/code.js')

router.post('/signup', (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'Please fill in all the fields',
      })
    }

    console.log(UserClass.getList())

    if (UserClass.findUserByEmail(email)) {
      return res.status(400).json({
        message: 'User with such email already exists',
      })
    } else {
      UserClass.addUser(email, password)

      return res.status(200).json({
        user: UserClass.findUserByEmail(email),
      })
    }
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      message: err.message,
    })
  }
})

router.post('/signup-confirm', (req, res) => {
  try {
    const { email } = req.body

    console.log(email)

    if (!email) {
      return res.status(400).json({
        message:
          "There's an error during obtaining your email",
      })
    }

    Code.createCode(email)

    const code = Code.getCode(email)

    console.log(code.code)

    if (code) {
      return res.status(200).json({
        code: code.code,
      })
    } else {
      return res.status(400).json({
        message:
          "There's an error during obtaining your email",
      })
    }
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      message: err.message,
    })
  }
})

router.post('/signup-confirm-code', (req, res) => {
  try {
    const { isConfirm, email } = req.body

    if (!isConfirm) {
      return res.status(400).json({
        message: 'Something went wrong',
      })
    } else {
      const user = UserClass.findUserByEmail(email)

      if (!user) {
        return res.status(400).json({
          message: "User with such email doesn't exist",
        })
      }

      user.validateUser()

      if (!user.isConfirm) {
        return res.status(400).json({
          message: 'Failed to confirm',
        })
      } else {
        Code.deleteCode(email)
        return res.status(200).json({
          isConfirm: true,
        })
      }
    }
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    })
  }
})

module.exports = router
