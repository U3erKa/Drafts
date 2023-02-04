'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING(64),
      },
      manufacturer: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      modelYear: {
        type: Sequelize.INTEGER,
        field: 'model_year',
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      },
      isUsed: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        field: 'is_used',
        defaultValue: false,
      },
      serialNumber: {
        allowNull: false,
        type: Sequelize.STRING(64),
        field: 'serial_number',
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  },
};
