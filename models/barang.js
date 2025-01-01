'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
   
    static associate(models) {
      Barang.hasMany(models.Inventories, { foreignKey: 'id_barang' });
      Barang.hasMany(models.BarangKondisi, { foreignKey: 'id_barang' });
      Barang.belongsTo(models.Merk, { foreignKey: 'id_merk' });
      Barang.belongsTo(models.Kondisi, { foreignKey: 'id_kondisi' });
    }
  }
  Barang.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    nama_barang :{
      type: DataTypes.STRING,
      allowNull: false
    },
    kode_barang :{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    id_merk :{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Merk',
        key: 'id',
      },
    },
    id_kondisi :{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Kondisi',
        key: 'id',
      },
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
    modelName: 'Barang',
    tableName: 'barang',
    timestamps: true,
  });
  return Barang;
};