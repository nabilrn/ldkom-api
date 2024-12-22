'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssistantPickets extends Model {
    static associate(models) {
      AssistantPickets.belongsTo(models.Assistants, { foreignKey: 'id_assistant' });
      AssistantPickets.belongsTo(models.PicketSchedules, { foreignKey: 'id_picket' });
    }
  }
  AssistantPickets.init(
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
          model: 'Assistants',
          key: 'id',
        },
      },
      id_picket: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'PicketSchedules',
          key: 'id',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'updated_at',
      },
    },
    {
      sequelize,
      modelName: 'AssistantPickets',
      tableName: 'assistantpickets',
      timestamps: true,
    }
  );

  return AssistantPickets;
};