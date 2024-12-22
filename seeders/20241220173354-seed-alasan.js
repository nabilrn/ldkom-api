'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('alasan', [
      { reason: 'Belajar', created_at: new Date(), updated_at: new Date() },
      { reason: 'Bimbingan', created_at: new Date(), updated_at: new Date() },
      { reason: 'Ngeprint', created_at: new Date(), updated_at: new Date() },
      { reason: 'Hosting', created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alasan', null, {});
  }
};