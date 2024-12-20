// filepath: /c:/API/ldkom-api/migrations/20241220171933-create-mahasiswa.js
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mahasiswa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      nim: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      total_visits: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mahasiswa');
  }
};