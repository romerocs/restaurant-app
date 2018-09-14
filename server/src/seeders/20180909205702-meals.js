'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert(
    "Meals",
    [
        {
            type: "breakfast",
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        },
        {
            type: "brunch",
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        },
        {
          type: "lunch",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          type: "dinner",
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
