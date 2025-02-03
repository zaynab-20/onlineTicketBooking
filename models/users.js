const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../DB/db')

class Users extends Model {}

Users.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Users', // We need to choose the model name
    tableName: 'Users',
    timestamps: true
  },
);

module.exports = Users