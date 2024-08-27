'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('players', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact_number: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      profile_pic: {
        type: Sequelize.STRING(255), // Limiting the length to 255 characters
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, // Automatically update this on each record update
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('players');
  }
};
