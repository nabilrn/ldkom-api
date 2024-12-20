// filepath: /c:/API/ldkom-api/seeders/20241220180000-seed-alasan.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('alasan', [
      { reason: 'Belajar' },
      { reason: 'Bimbingan' },
      { reason: 'Ngeprint' },
      { reason: 'Hosting' },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alasan', null, {});
  }
};