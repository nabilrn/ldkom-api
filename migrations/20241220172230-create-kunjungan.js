// filepath: /c:/API/ldkom-api/migrations/20241220172230-create-kunjungan.js
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kunjungan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_mhs: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'mahasiswa',
          key: 'id'
        }
      },
      reason: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'alasan',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kunjungan');
  }
};