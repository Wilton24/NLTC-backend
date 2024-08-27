'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('admins', [
        {
          name: 'Alice Admin',
          email: 'alice.admin@example.com',
          password: 'hashedpassword1', // Replace with a hashed password
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bob Admin',
          email: 'bob.admin@example.com',
          password: 'hashedpassword2', // Replace with a hashed password
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more admin records as needed
      ], {});
      console.log('Admins seeded successfully');
    } catch (error) {
      console.error('Error seeding admins:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
