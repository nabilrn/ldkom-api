'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merk extends Model {
  
    static associate(models) {
      Merk.hasMany(models.Barang, { foreignKey: 'id_merk' });
    }
  }
  Merk.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    merk : {
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
    modelName: 'Merk',
    tableName: 'merk',
    timestamps: true,
  });
  return Merk;
};