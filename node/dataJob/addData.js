const express = require('express')
const router = express.Router()

const { User, PhoneList } = require('../../models')
const bcrypt = require('bcrypt')
const path = require('path')
const fs = require('fs')
const passport = require('passport')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

async function fetchData() {
  const hash = await bcrypt.hash(String('123nkasndkn1kn'), 12)
  await User.create({
    //email: profile._json.kakao_account.email,
    kakaoid: 1,
    nick: '1',
    phone: '1',
    MBTI: '1',
    introduce: '2',
    gender: 0,
  })
  await User.create({
    //email: profile._json.kakao_account.email,
    kakaoid: 2,
    nick: '2',
    phone: '2',
    MBTI: '2',
    introduce: '2',
    gender: 0,
  })
  await User.create({
    //email: profile._json.kakao_account.email,
    kakaoid: 3,
    nick: '3',
    phone: '3',
    MBTI: '3',
    introduce: '3',
    gender: 0,
  })
  await User.create({
    //email: profile._json.kakao_account.email,
    kakaoid: 4,
    nick: '4',
    phone: '4',
    MBTI: '4',
    introduce: '4',
    gender: 1,
  })
  await User.create({
    //email: profile._json.kakao_account.email,
    kakaoid: 5,
    nick: '5',
    phone: '5',
    MBTI: '5',
    introduce: '5',
    gender: 1,
  })
  await User.create({
    //email: profile._json.kakao_account.email,
    kakaoid: 6,
    nick: '6',
    phone: '6',
    MBTI: '6',
    introduce: '6',
    gender: 1,
  })
}

fetchData()
