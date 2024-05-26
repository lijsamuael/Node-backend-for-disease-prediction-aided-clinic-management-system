const { Sequelize } = require("sequelize");

const { sequelize } = require("../config/dbConnection");

const Prescription = sequelize.define("Prescription", {
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
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  issueDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  confirmDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
});
module.exports = { Prescription, sequelize };
