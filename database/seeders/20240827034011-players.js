'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'John Doe',
        age: 25,
        sex: 'Male',
        contact_number: '1234567890',
        email: 'john.doe@example.com',
        profile_pic: 'https://example.com/profile-pics/john_doe.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        age: 28,
        sex: 'Female',
        contact_number: '9876543210',
        email: 'jane.smith@example.com',
        profile_pic: 'https://example.com/profile-pics/jane_smith.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Alex Johnson',
        age: 22,
        sex: 'Non-binary',
        contact_number: '5555555555',
        email: 'alex.johnson@example.com',
        profile_pic: 'https://example.com/profile-pics/alex_johnson.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('players', null, {});
  }
};
