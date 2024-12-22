'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assistants extends Model {
    static associate(models) {
      Assistants.hasMany(models.AssistantPickets, { foreignKey: 'id_assistant' });
      Assistants.hasMany(models.Attendances, { foreignKey: 'id_assistant' });
      Assistants.hasMany(models.Artikel, { foreignKey: 'id_assistant' });
      Assistants.hasMany(models.Kas, { foreignKey: 'id_assistant' });
    }
  }
  Assistants.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      id_num: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
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
      modelName: 'Assistants',
      tableName: 'assistants',
      timestamps: true,
    }
  );

  return Assistants;
};