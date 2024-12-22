'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PicketSchedules extends Model {
    static associate(models) {
      PicketSchedules.hasMany(models.AssistantPickets, { foreignKey: 'id_picket' });
      PicketSchedules.hasMany(models.Attendances, { foreignKey: 'id_picket' });
    }
  }
  PicketSchedules.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      day: {
        type: DataTypes.STRING(255),
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
      modelName: 'PicketSchedules',
      tableName: 'picketschedules',
      timestamps: true,
    }
  );

  return PicketSchedules;
};