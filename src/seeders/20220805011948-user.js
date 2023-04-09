'use strict'

const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          username: 'admin',
          email: 'admin@mail.com',
          password: bcrypt.hashSync('Admin123', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          username: 'user',
          email: 'user@mail.com',
          password: bcrypt.hashSync('Admin123', 8),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
