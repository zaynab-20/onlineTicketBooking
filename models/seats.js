const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../DB/db")

class Seats extends Model {}

Seats.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
    },
    eventId: {
      type: Sequelize.UUID,
      allowNull:false,
      references: {
        model: 'Events',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    seatNumber: {
      type: Sequelize.INTEGER,
      allowNull:false,

    },
    isBooked: {
      type: Sequelize.BOOLEAN,
      allowNull:false

    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Seats', // We need to choose the model name
    tableName: 'Seats',
    timestamps: true
  },
);

module.exports = Seats