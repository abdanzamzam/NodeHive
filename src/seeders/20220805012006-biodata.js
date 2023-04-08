"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Biodata",
      [
        {
          id: 1,
          userId: 1,
          name: "Admin",
          numberPhone: "0389789347",
          photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 2,
          name: "User",
          numberPhone: "0734989348",
          photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Biodata", null, {});
  },
};
