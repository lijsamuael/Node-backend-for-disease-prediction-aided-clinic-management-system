const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const Treatment = sequelize.define("Treatment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  patientId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  doctorId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  disease: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  dosage: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  price: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
});
module.exports = { Treatment, sequelize };
