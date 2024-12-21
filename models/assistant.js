'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assistant extends Model {
    static associate(models) {
      // Define associations
      Assistant.belongsToMany(models.PicketSchedule, {
        through: models.AssistantPicket,
        foreignKey: 'id_assistant',
      });
      Assistant.hasMany(models.Attendance, { foreignKey: 'id_assistant' });
      Assistant.hasOne(models.Users, { foreignKey: 'assistant_id' });
    }
  }

  Assistant.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_num: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Assistant',
      tableName: 'assistant',
      timestamps: false,
    }
  );

  return Assistant;
};