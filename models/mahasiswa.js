// filepath: /c:/API/ldkom-api/models/mahasiswa.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    static associate(models) {
      // define association here
      Mahasiswa.hasMany(models.Kunjungan, { foreignKey: 'id_mhs' });
    }
  }
  Mahasiswa.init(
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
      nim: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      
    },
    {
      sequelize,
      modelName: 'Mahasiswa',
      tableName: 'mahasiswa',
      timestamps: false,
    }
  );

  return Mahasiswa;
};