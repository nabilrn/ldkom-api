'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PicketSchedules', [
      {
        day: 'Monday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        day: 'Tuesday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        day: 'Wednesday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        day: 'Thursday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        day: 'Friday',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PicketSchedules', null, {});
  }
};