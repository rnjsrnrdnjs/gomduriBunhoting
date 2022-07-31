const Sequelize = require("sequelize");

module.exports = class PhoneList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        meId: {
          type: Sequelize.STRING(200),
          allowNull: true,
          unique: false,
        },
        youId: {
          type: Sequelize.STRING(200),
          allowNull: false,
          unique: true,
        },
      
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "PhoneList",
        tableName: "phoneLists",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    //db.User.hasMany(db.Post);
  }
};
