'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;
    const users = [
      { username: 'Jefril', password: 'jefril', role: 'pembina labor' },
      { username: 'nabil', password: 'nabil', role: 'assistant' },
      { username: 'ami', password: 'ami', role: 'assistant' },
      { username: 'aurel', password: 'aurel', role: 'assistant' },
      { username: 'khalied', password: 'khalied', role: 'assistant' },
      { username: 'rani', password: 'rani', role: 'assistant' },
      { username: 'dini', password: 'dini', role: 'assistant' },
      { username: 'ilham', password: 'ilham', role: 'assistant' },
      { username: 'vina', password: 'vina', role: 'assistant' },
      { username: 'meutia', password: 'meutia', role: 'assistant' },
      { username: 'admin', password: 'labdassiua', role: 'admin' }
    ];

    const hashedUsers = await Promise.all(
      users.map(async user => ({
        ...user,
        password: await bcrypt.hash(user.password, saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    );

    await queryInterface.bulkInsert('Users', hashedUsers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};