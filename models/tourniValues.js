module.exports = (sequelize, DataTypes) => {
  const Tourni = sequelize.define(`Tourni`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    tournamentName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    numberOfTeams: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    Sponsor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    }
  });
  return Tourni;
};






