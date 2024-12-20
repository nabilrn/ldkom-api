// filepath: /c:/API/ldkom-api/models/kunjungan.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kunjungan extends Model {
    static associate(models) {
      // define association here
      Kunjungan.belongsTo(models.Mahasiswa, { foreignKey: 'id_mhs' });
      Kunjungan.belongsTo(models.Alasan, { foreignKey: 'reason' });
    }
  }
  Kunjungan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      id_mhs: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Mahasiswa',
          key: 'id',
        },
      },
      reason: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Alasan',
          key: 'id',
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Kunjungan',
      tableName: 'kunjungan',
      timestamps: false,
    }
  );

  return Kunjungan;
};