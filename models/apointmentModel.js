const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/dbConnection')

const Appointment= sequelize.define('Appointment', {
  id: {
    type: Sequelize.INTEGER,
   autoIncrement: true,
   primaryKey: true,
  },  
  doctorId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  patientId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  appointmentFee: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  location: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  date: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  time: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
});
module.exports = {Appointment,sequelize};
