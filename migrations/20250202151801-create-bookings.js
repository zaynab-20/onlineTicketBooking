'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};