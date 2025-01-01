'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Barangs', {
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
      kode_barang: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      id_merk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Merks',
          key: 'id'
        }
      },
      id_kondisi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Kondisis',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Barangs');
  }
};