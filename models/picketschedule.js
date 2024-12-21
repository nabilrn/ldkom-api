'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PicketSchedule extends Model {
    static associate(models) {
      // Define associations
      PicketSchedule.belongsToMany(models.Assistant, {
        through: models.AssistantPicket,
        foreignKey: 'id_picket',
      });
      PicketSchedule.hasMany(models.Attendance, { foreignKey: 'id_picket' });
    }
  }

  PicketSchedule.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PicketSchedule',
      tableName: 'picket_schedule',
      timestamps: false,
    }
  );

  return PicketSchedule;
};
