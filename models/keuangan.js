'use strict';
const {
  Model
} = require('sequelize');
const kunjungan = require('./kunjungan');
module.exports = (sequelize, DataTypes) => {
  class Keuangan extends Model {
    static associate(models) {
      Keuangan.belongsTo(models.Kas, { foreignKey: 'id_kas' });
    }
  }
  Keuangan.init({
    jenis :{
      type: DataTypes.ENUM('pemasukan','pengeluaran'),
      allowNull: false
    },
    nama :{
      type: DataTypes.STRING,
      allowNull: false
    },
    kegunaaan :{
      type: DataTypes.TEXT,
      allowNull: false
    },
    tanggal :{
      type: DataTypes.DATE,
      allowNull: false
    },
    besaran:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    keterangan:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    nota:{
      type: DataTypes.ENUM('ada','tidak ada'),
      allowNull: false
    },
    status :{
      type: DataTypes.ENUM('hutang','lunas'),
      allowNull: false
    },
    id_kas:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'kas',
        key: 'id'
      }
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
    modelName: 'Keuangan',
    tableName : 'keuangan',
    timestamps: true,
  });
  return Keuangan;
};