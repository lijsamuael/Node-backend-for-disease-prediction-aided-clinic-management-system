
const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/dbConnection')

const TestName=sequelize.define('TestName', {
  id: {
    type: Sequelize.INTEGER,
   autoIncrement: true,
   primaryKey: true,
  },  
  testName:{
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  prescId: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  value: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
});
module.exports = {TestName,sequelize};
