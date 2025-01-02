'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penerbit extends Model {
    static associate(models) {
      Penerbit.hasMany(models.Buku, {
        foreignKey: 'id_penerbit',
        as: 'buku'
      });
    }
  }
  Penerbit.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Penerbit',
    tableName: 'penerbit',
    timestamps: true

  });
  return Penerbit;
};