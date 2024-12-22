'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artikel extends Model {
    static associate(models) {
      Artikel.belongsTo(models.Assistants, { foreignKey: 'id_assistant' });
    }
  }
  Artikel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      judul: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      gambar: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      id_assistant: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Assistants',
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
    },
    {
      sequelize,
      modelName: 'Artikel',
      tableName: 'artikel',
      timestamps: true,
    }
  );

  return Artikel;
};