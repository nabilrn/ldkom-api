'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AssistantPickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_assistant: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Assistants',
          key: 'id'
        }
      },
      id_picket: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PicketSchedules',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AssistantPickets');
  }
};