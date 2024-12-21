'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_barang: {
        type: Sequelize.STRING,
        allowNull: false
      },
      merk: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kode_barang: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kondisi_baik: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      kondisi_rusak_ringan: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      kondisi_rusak_berat: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      total: {
        type: Sequelize.INTEGER
      },
      satuan: {
        type: Sequelize.STRING
      },
      catatan: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inventories');
  }
};