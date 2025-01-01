// filepath: /c:/API/ldkom-api/seeders/20241221161300-seed-kondisi.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kondisis', [
      {
        kondisi: 'Bagus',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        kondisi: 'Rusak Ringan',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        kondisi: 'Rusak Berat',
        created_at: new Date(),
        updated_at: new Date()
      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kondisis', null, {});
  }
};