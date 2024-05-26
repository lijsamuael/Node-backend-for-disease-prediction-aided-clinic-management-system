const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const Admin = sequelize.define(
  "Admin",
  {
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
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false, // Disable Sequelize's automatic `createdAt` and `updatedAt` fields if not needed
  }
);

module.exports = { Admin, sequelize };
