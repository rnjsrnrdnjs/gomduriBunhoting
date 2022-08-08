const express = require("express");
const router = express.Router();

const { User, PhoneList } = require("../../models");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const passport = require("passport");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (app) => {
  app.use("/", router);

  router.post("/me", async (req, res, next) => {
    return res.json({ user: req.user });
  });
  router.post("/changeMyInfo", async (req, res, next) => {
    try {
      const { req_user_id, nick, phone, MBTI, introduce } = req.body;
      await User.update(
        {
          nick,
          phone,
          MBTI,
          introduce,
        },
        {
          where: {
            id: req_user_id,
          },
        }
      );
      return res.json({ status: "true" });
    } catch (err) {
      console.error(err);
    }
  });
  router.post("/threeCheck", async (req, res, next) => {
    try {
      const { req_user_id } = req.body;
      const date = new Date(new Date().setHours(0, 0, 0, 0));
      const phoneList = await PhoneList.findAll({
        where: {
          meId: req_user_id,
          createdAt: {
            [Op.gt]: date,
          },
        },
      });
      if (phoneList.length > 3) return res.json({ status: "false" });
      else return res.json({ status: "true" });
    } catch (err) {
      console.error(err);
    }
  });
  router.post("/addPhoneList", async (req, res, next) => {
    try {
      const { req_user_id } = req.body;

      const me = await User.findOne({
        where: {
          id: req_user_id,
        },
      });

      const date = new Date(new Date().setHours(0, 0, 0, 0));
      const phoneList = await PhoneList.findAll({
        where: {
          meId: req_user_id,
          createdAt: {
            [Op.gt]: date,
          },
        },
      });

      if (phoneList.length > 3) return res.json({ status: "false" });

      let you;
      let findChk = false;

      while (findChk) {
        if (me.gender === 0) {
          you = await User.findOne({
            where: { gender: 1 },
            order: Sequelize.literal("rand()"),
          });
        } else if (me.gender === 1) {
          you = await User.findOne({
            where: {
              gender: 0,
            },
            order: Sequelize.literal("rand()"),
          });
        }

        const phoneListChk = await PhoneList.findOne({
          where: {
            meId: req_user_id,
            youId: you.id,
          },
        });
        if (!phoneListChk && parseInt(req_user_id) !== parseInt(you.id))
          findChk = true;
      }
      await PhoneList.create({
        where: {
          meId: req_user_id,
          youId: you.id,
        },
      });
      return res.json({ you });
    } catch (err) {
      console.error(err);
    }
  });
  router.post("/getMyPhoneList", async (req, res, next) => {
    try {
      const { req_user_id } = req.body;
      const phoneList = await PhoneList.findAll({
        where: {
          meId: req_user_id,
        },
      });

      await Promise.all(
        phoneList.map(async (list, idx) => {
          const user = await User.findOne({
            where: {
              id: list.youId,
            },
          });
          list["dataValues"].User = user;
        })
      );

      return res.json({ phoneList });
    } catch (err) {
      console.error(err);
    }
  });
};
