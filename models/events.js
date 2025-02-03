const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize =require("../DB/db");

class Events extends Model {}

Events.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    eventName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    date: {
      type: DataTypes.STRING,
      allowNull:false
    },
    venue: {
      type: DataTypes.STRING,
      allowNull:false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Events', // We need to choose the model name
    tableName: 'Events',
    timestamps: true
  },
);

module.exports = Events
