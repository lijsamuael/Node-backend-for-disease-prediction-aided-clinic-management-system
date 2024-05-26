const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const Doctor = sequelize.define("Doctor", {
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
  photo: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  specialization: {
    type: Sequelize.STRING(10),
    allowNull: true,
  },
  gender: {
    type: Sequelize.STRING(10),
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  username: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  contact: {
    type: Sequelize.STRING(255),
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
});

sequelize
  .sync()
  .then(() => {
    console.log("Doctor table created!");
  })
  .catch((err) => {
    console.error("Error creating doctor table:", err);
  });

module.exports = { Doctor, sequelize };
