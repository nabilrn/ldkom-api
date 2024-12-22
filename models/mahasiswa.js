'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    static associate(models) {
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
      modelName: 'Mahasiswa',
      tableName: 'mahasiswa',
      timestamps: true,
    }
  );

  return Mahasiswa;
};