'use strict';

module.exports = {
  //eslint-disable-next-line
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserProfiles', [{
      about: 'I am a test player account!',
      birthdate: 3 / 23 / 82,
      city: 'Chicago',
      state: 'IL',
      mySports: [baseball, hockey]
    }], {});
  },

  //eslint-disable-next-line
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserProfiles', null, {});
  }
};
