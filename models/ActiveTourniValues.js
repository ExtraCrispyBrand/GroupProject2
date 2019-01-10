module.exports = (sequelize, DataTypes) => {
  const ActiveTournament = sequelize.define(`ActiveTournament`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tournamentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TeamName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Wins: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    losses: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    totalpoints: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  return ActiveTournament;
};
