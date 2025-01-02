'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    static associate(models) {
      Buku.belongsTo(models.JenisBuku, { foreignKey: 'id_jenis' });
      Buku.belongsTo(models.Penerbit, { foreignKey: 'id_penerbit' });
      Buku.belongsTo(models.Kondisi, { foreignKey: 'id_kondisi' });
    }
  }
  Buku.init({
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_jenis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'JenisBuku',
        key: 'id',
      },
    },
    pengarang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_penerbit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Penerbit',
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },


  }, {
    sequelize,
    modelName: 'Buku',
    tableName: 'buku',
    timestamps: true,
  });
  return Buku;
};