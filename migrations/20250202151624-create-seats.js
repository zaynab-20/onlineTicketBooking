'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
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
    await queryInterface.dropTable('Seats');
  }
};