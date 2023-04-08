"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserRoles",
      [
        {
          id: 1,
          userId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 2,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserRoles", null, {});
  },
};
