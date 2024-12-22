'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('assistants', [
      {
        name: 'Nabil Rizki Navisa',
        id_num: 'LDKOM.10.05',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Talitha Zulfa Amirah',
        id_num: 'LDKOM.09.03',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Rahma Aurelia Zami',
        id_num: 'LDKOM.10.06',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Khalied Nauly Maturino',
        id_num: 'LDKOM.10.03',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ramadhani Safitri',
        id_num: 'LDKOM.10.07',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Nandini Annisa Byant',
        id_num: 'LDKOM.09.01',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ilham Nofaldi',
        id_num: 'LDKOM.10.02',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Chalvina Suja Rahayu',
        id_num: 'LDKOM.10.01',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Meutia Dewi Putri Kartika',
        id_num: 'Ldkom.10.04',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assistants', null, {});
  }
};