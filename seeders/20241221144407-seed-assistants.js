'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Assistants', [
      {
        name: 'Nabil Rizki Navisa',
        id_num: 'LDKOM.10.05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Talitha Zulfa Amirah',
        id_num: 'LDKOM.09.03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rahma Aurelia Zami',
        id_num: 'LDKOM.10.06',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Khalied Nauly Maturino',
        id_num: 'LDKOM.10.03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ramadhani Safitri',
        id_num: 'LDKOM.10.07',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nandini Annisa Byant',
        id_num: 'LDKOM.09.01',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ilham Nofaldi',
        id_num: 'LDKOM.10.02',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chalvina Suja Rahayu',
        id_num: 'LDKOM.10.01',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Meutia Dewi Putri Kartika',
        id_num: 'Ldkom.10.04',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Assistants', null, {});
  }
};