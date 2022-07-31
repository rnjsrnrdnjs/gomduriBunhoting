const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const User = require("./user");
const PhoneList = require("./phoneList");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.User = User;
db.PhoneList = PhoneList;

User.init(sequelize);
PhoneList.init(sequelize);

User.associate(db);
PhoneList.associate(db);

module.exports = db;
