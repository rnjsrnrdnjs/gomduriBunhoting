const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        nick: {
          type: Sequelize.STRING(200),
          allowNull: true,
          unique: false,
        },
        phone: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: true,
        },
        MBTI: {
          type: Sequelize.STRING(200),
          allowNull: true,
          unique: false,
        },
        introduce: {
          type: Sequelize.STRING(200),
          allowNull: true,
          unique: false,
        },
        kakaoid: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: true,
        },
        gender: {
          //0 남자 , 1여자
          type: Sequelize.INTEGER,
          allowNull: true,
          unique: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    //db.User.hasMany(db.Post);
  }
};
