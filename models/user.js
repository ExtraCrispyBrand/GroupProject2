var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    firstName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notNull: true
      }
    },

    lastName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notNull: true
      }
    },

    email: {
      type: DataTypes.STRING,
      notNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/
      }
    },

    last_login: {
      type: DataTypes.DATE
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
