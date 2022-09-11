const express = require('express')
const router = express.Router()
const passport = require('passport')
const path = require('path')

module.exports = (app) => {
  app.use('/', router)
  router.use((req, res, next) => {
    /* res.locals 값추가 가능*/
    next()
  })

  router.get('/public', (req, res, next) => {
    res.status(200).json({ message: 'here is your public resource' })
  })
  router.get('/auth/kakao', passport.authenticate('kakao'))
  router.get(
    '/auth/kakao/callback',
    passport.authenticate('kakao', {
      failureRedirect: '/?loginFalse',
      successRedirect: '/auth/sns',
    }),
    (req, res) => {
      return res.send('Login')
    },
  )
  router.get('/robots.txt', (req, res, next) => {
    try {
      res.sendFile(path.join(__dirname, '../../../webreact/build/robots.txt'))
    } catch (err) {
      console.error(err)
    }
  })

  router.get('*', (req, res, next) => {
    try {
      res.sendFile(path.join(__dirname, '../../../webreact/build/index.html'))
    } catch (err) {
      console.error(err)
    }
  })
}
