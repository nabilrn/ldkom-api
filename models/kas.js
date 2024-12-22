'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kas extends Model {
    static associate(models) {
      Kas.belongsTo(models.Assistants, { foreignKey: 'id_assistant' });
      Kas.hasMany(models.Keuangan, { foreignKey: 'id_kas' });
    }
  }
  Kas.init({
    bulan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_assistant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Assistants',
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
    modelName: 'Kas',
    tableName: 'kas',
    timestamps: true,
  });
  return Kas;
};