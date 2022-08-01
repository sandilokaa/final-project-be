'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Users',
          key: 'id',
        }
      },
      owner_id:{
        type: Sequelize.INTEGER,
        reference: {
          model: 'Users',
          key: 'id',
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Products',
          key: 'id',
        }
      },
      requestedPrice: {
        type: Sequelize.INTEGER
      },
      isAccepted: {
        type: Sequelize.BOOLEAN
      },
      isRejected: {
        type: Sequelize.BOOLEAN
      },
      isOpened: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Transactions');
  }
};