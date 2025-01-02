'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kondisi extends Model {
    
    static associate(models) {
      Kondisi.hasMany(models.Barang, { foreignKey: 'id_kondisi' });
      Kondisi.hasMany(models.BarangKondisi, { foreignKey: 'id_kondisi' });
      Kondisi.hasMany(models.Buku, { foreignKey: 'id_kondisi' });
    }
  }

  Kondisi.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    kondisi : {
      type: DataTypes.STRING,
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
    modelName: 'Kondisi',
    tableName: 'kondisis',
    timestamps: true,
  });
  return Kondisi;
};