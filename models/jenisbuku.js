'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JenisBuku extends Model {
    static associate(models) {
      // define association here
    }
  }
  JenisBuku.init({
    jenis: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: 
    {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: 
    {
      type: DataTypes.DATE,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'JenisBuku',
    tableName: 'jenis_buku',
    timestamps: true,
  });
  return JenisBuku;
};