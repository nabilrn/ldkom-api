'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  async up(queryInterface, Sequelize) {
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
        created_at: new Date(),
        updated_at: new Date()
      }))
    );

    await queryInterface.bulkInsert('users', hashedUsers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};