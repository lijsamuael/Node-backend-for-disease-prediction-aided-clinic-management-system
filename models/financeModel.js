const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const Finance = sequelize.define("Finance", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  photo: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  username: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
});

module.exports = { Finance, sequelize };
