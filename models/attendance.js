'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendances extends Model {
    static associate(models) {
      Attendances.belongsTo(models.Assistants, { foreignKey: 'id_assistant' });
      Attendances.belongsTo(models.PicketSchedules, { foreignKey: 'id_picket' });
    }
  }
  Attendances.init(
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
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('present', 'absent'),
        allowNull: false,
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
      modelName: 'Attendances',
      tableName: 'attendances',
      timestamps: true,
    }
  );

  return Attendances;
};