
const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/dbConnection')

const Patient = sequelize.define('Patient', {
  id: {
    type: Sequelize.INTEGER,
   autoIncrement: true,
   primaryKey: true,
  },  
  firstName: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  age: {
    type: Sequelize.STRING(10),
    allowNull: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  photo: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  gender: {
    type: Sequelize.STRING(10),
    allowNull: true,
  },
  
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  contact: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  username: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  state: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  wereda: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  kebele: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  cardNumber: {
    type: Sequelize.STRING(20),
    allowNull: true,
  },
  isNew: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  fee: {
    type: Sequelize.STRING(100),
    allowNull: true,
  }, 
});
module.exports = {Patient,sequelize};
