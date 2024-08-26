'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Players', [
      {
        name: 'Wilton Batiquin',
        age: 26,
        sex: 'Male',
        contact_number: '09294307465',
        email: 'wgb@topspin.com',
        // profile_pic: 'Oyo.jpg',
      },
      {
        name: 'Danica Bea',
        age: 24,
        sex: 'Female',
        contact_number: '0987654321',
        email: 'dbt@topspin.com',
        // profile_pic: 'dbt.jpg',
      },
      {
        name: 'Ron Lee',
        age: 25,
        sex: 'Male',
        contact_number: '0975484234',
        email: 'Ron_Lee@topspin.com',
        // profile_pic: 'r_lee.jpg',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {});
  }
};
