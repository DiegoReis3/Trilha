'use strict';

const { generateHash } = require('../../utils/auth');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('users', [{
      name: 'Admin',
      email: 'admin',
      password: await generateHash('admin123'),
      cpf: '11111111111111',
      zip_code: '111111111',
      is_admin: 1
    }], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
