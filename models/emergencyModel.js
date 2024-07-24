const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const Emergency = sequelize.define("Emergency", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  patientFirstName: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  patientLastName: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  emergencyFee: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 200,
  },
  location: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
});

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Emergency table created!");
//   })
//   .catch((err) => {
//     console.error("Error creating emergency table:", err);
//   });

module.exports = { Emergency, sequelize };
