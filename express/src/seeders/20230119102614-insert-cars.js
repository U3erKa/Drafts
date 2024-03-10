'use strict';

const { Op } = require('sequelize');

const cars = [];

for (let i = 0; i < 100; i++) {
  cars.push({
    model: `Test ${i}`,
    manufacturer: `Test Manuf ${i}`,
    model_year: 2020,
    price: 45000,
    is_used: false,
    serial_number: `XT24${i < 10 ? `0${i}` : i}`,
    created_at: new Date(),
    updated_at: new Date(),
  });
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('cars', cars);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cars', {
      serial_number: { [Op.like]: 'XT24__' },
    });
  },
};
