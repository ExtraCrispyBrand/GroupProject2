'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      accountType: {
        type: DataTypes.ENUM('player', 'sponsor'),
        allowNull: false,
        defaultValue: 'player'
      },


      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true
        }
      },

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true
        }
      },

      companyName: {
        type: DataTypes.STRING,
        allowNull: true
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/
        }
      },

      lastlogin: {
        type: DataTypes.DATE
      },

      isActive: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  //eslint-disable-next-line
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};