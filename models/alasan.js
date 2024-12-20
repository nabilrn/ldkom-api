// filepath: /c:/API/ldkom-api/models/alasan.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alasan extends Model {
    static associate(models) {
      // define association here
      Alasan.hasMany(models.Kunjungan, { foreignKey: 'reason' });
    }
  }
  Alasan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      reason: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Alasan',
      tableName: 'alasan',
      timestamps: false,
    }
  );

  return Alasan;
};