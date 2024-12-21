'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssistantPicket extends Model {
    static associate(models) {
      // No direct associations since this is a junction table
    }
  }

  AssistantPicket.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      id_assistant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Assistant',
          key: 'id',
        },
      },
      id_picket: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PicketSchedule',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'AssistantPicket',
      tableName: 'assistant_picket',
      timestamps: false,
    }
  );

  return AssistantPicket;
};
