const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Online_Booking', 'root', 'adejobii20', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize