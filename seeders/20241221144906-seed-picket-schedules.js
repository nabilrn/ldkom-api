'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('picketschedules', [
      {
        day: 'Monday',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Tuesday',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Wednesday',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Thursday',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Friday',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('picketschedules', null, {});
  }
};