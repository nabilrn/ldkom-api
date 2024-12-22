'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventories extends Model {
    static associate(models) {
      // define association here if needed
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
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      merk: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      kode_barang: {
        type: DataTypes.STRING(100),
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
        type: DataTypes.STRING(20),
      },
      catatan: {
        type: DataTypes.TEXT,
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
      modelName: 'Inventories',
      tableName: 'inventories',
      timestamps: true,
    }
  );

  return Inventories;
};