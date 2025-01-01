'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventories extends Model {
    static associate(models) {
      Inventories.belongsTo(models.Barang, { foreignKey: 'id_barang' });
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
      id_barang: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Barang',
          key: 'id',
        },
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