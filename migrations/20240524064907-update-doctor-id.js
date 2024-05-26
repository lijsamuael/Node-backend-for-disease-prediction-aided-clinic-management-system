'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Doctors', 'id', {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Doctors', 'id', {
      type: Sequelize.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    });
  },
};
