'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('inventories', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      nama_barang: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      merk: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      kode_barang: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      kondisi_baik: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      kondisi_rusak_ringan: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      kondisi_rusak_berat: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      total: {
        type: Sequelize.INTEGER,
      },
      satuan: {
        type: Sequelize.STRING(20),
      },
      catatan: {
        type: Sequelize.TEXT,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('inventories');
  }
};