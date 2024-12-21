'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      Attendance.belongsTo(models.Assistant, { foreignKey: 'id_assistant' });
      Attendance.belongsTo(models.PicketSchedule, { foreignKey: 'id_picket' });
    }
  }

  Attendance.init(
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
      status: {
        type: DataTypes.ENUM('attend', 'absent'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Attendance',
      tableName: 'attendance',
      timestamps: false,
    }
  );

  return Attendance;
};
