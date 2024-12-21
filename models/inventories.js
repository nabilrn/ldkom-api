'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventories extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Inventories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      nama_barang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      merk: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kode_barang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kondisi_baik: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      kondisi_rusak_ringan: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      kondisi_rusak_berat: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      total: {
        type: DataTypes.INTEGER,
      },
      satuan: {
        type: DataTypes.STRING,
      },
      catatan: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Inventories',
      tableName: 'inventories',
      timestamps: true,
    }
  );

  return Inventories;
};