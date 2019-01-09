'use strict';

module.exports = {
  //eslint-disable-next-line
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      firstName: 'Player',
      lastName: 'Test',
      email: 'player@test.com',
      password: process.env.PLAYERTESTACCT_KEY
    }], {});
  },

  //eslint-disable-next-line
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
