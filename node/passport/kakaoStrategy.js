const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy
const bcrypt = require('bcrypt')

const { User } = require('../models')

module.exports = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('kakao profile', profile)
        try {
          const exUser = await User.findOne({
            where: { kakaoid: profile.id },
          })
          if (exUser) {
            done(null, exUser)
          } else {
            const hash = await bcrypt.hash(
              String(profile.id) + process.env.SNS_PASSWORD_ALPHA,
              12,
            )
            const newUser = await User.create({
              //email: profile._json.kakao_account.email,
              kakaoid: profile.id,
              nick: '',
              phone: '',
              MBTI: '',
              introduce: '',
              gender: profile._json.kakao_account.gender === 'mail' ? 0 : 1,
            })

            done(null, newUser)
          }
        } catch (err) {
          console.error(err)
          done(err)
        }
      },
    ),
  )
}
