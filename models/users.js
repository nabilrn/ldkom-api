'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // Define association here
      Users.belongsTo(models.Assistant, { foreignKey: 'assistant_id' });
    }
  }

  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('assistant', 'admin', 'pembina labor'),
        allowNull: false,
      },
      assistant_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Assistant',
          key: 'id',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'SET NULL',
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'users',
      timestamps: true,
    }
  );

  return Users;
};