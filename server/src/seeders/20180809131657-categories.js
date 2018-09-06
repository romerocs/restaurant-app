"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        // Add altering commands here.
        // Return a promise to correctly handle asynchronicity.

        // Example:
        return queryInterface.bulkInsert(
            "Categories",
            [
                {
                    category: "new",
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW')
                },
                {
                    category: "revisit",
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW')
                },
                {
                  category: "visited",
                  createdAt: Sequelize.fn('NOW'),
                  updatedAt: Sequelize.fn('NOW')
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    }
};
