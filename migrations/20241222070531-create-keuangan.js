'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('keuangan', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      jenis: {
        type: Sequelize.ENUM('pemasukan', 'pengeluaran'),
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kegunaaan: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      besaran: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      keterangan: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      nota: {
        type: Sequelize.ENUM('ada', 'tidak ada'),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('hutang', 'lunas'),
        allowNull: false,
      },
      id_kas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'kas',
          key: 'id',
        },
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
    await queryInterface.dropTable('keuangan');
  }
};