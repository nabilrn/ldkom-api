'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bukus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_jenis: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'JenisBukus',
          key: 'id'
        }
      },
      pengarang: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_penerbit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Penerbits',
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bukus');
  }
};