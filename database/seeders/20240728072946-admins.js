module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', [
      {
        name: 'Retxed Bucks',
        email: 'Apaps@topspin.com',
        password: 'kanchawa!',
      },
      {
        name: 'Dul Pits',
        email: 'Junspak@topspin.com',
        password: 'yawbackhand',
      },
      {
        name: 'Wilton Batiquin',
        email: 'cbasher24@gmail.com',
        password: '12345678'
      },
      {
        name: 'peanut',
        email: 'misay@gg.com',
        password: '$2b$10$GqEO.gUY8K.zjqPhLQrnVOVeQeOOzxrMxUiBrQoOt53VrDbsbf3kW'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
  }
};
