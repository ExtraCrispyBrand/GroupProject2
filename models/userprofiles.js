module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('UserProfile', {
    about: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [2]
      }
    },

    mySports: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue('mySports').split(' ');
      },
      set(val) {
        this.setDataValue('mySports'), val.join(' ');
      }
    },

    facebookURL: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isURL: true
      }
    }
  });

  return UserProfile;
};