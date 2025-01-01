'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BarangKondisi extends Model {
    
    static associate(models) {
      BarangKondisi.belongsTo(models.Barang, { foreignKey: 'id_barang' });
      BarangKondisi.belongsTo(models.Kondisi, { foreignKey: 'id_kondisi' });
    }
  }
  BarangKondisi.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    id_barang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Barang',
        key: 'id',
      },
    },
    id_kondisi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Kondisi',
        key: 'id',
      },
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  }, {
    sequelize,
    modelName: 'BarangKondisi',
    tableName: 'barang_kondisi',
    timestamps: false,
  });
  return BarangKondisi;
};