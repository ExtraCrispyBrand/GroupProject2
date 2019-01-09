'use strict';

module.exports = {
  //eslint-disable-next-line
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      firstName: 'Sponsor',
      lastName: 'Test',
      companyName: 'Sponsor, Inc.',
      email: 'sponsor@test.com',
      password: process.env.SPONSORTESTACCT_KEY
    }], {});
  },

  //eslint-disable-next-line
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
