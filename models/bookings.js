const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize =require("../DB/db")
class Bookings extends Model {}

Bookings.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
    },
    userId: {
      type: Sequelize.UUID,
      allowNull:false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    },
    eventId: {
      type: Sequelize.UUID,
      allowNull:false,
      references:{
        model: 'Events',
        key:'id'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
      
    },
    seatId: {
      type: Sequelize.UUID,
      allowNull:false,
      references:{
        model:'Seats',
        key:'id'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Bookings', // We need to choose the model name
    tableName:'Bookings',
    timestamps:true
  },
);

module.exports = Bookings