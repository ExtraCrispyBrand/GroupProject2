(`dotenv`).config();

module.exports = {
  development: {
    username: `root`,
    password: process.env.mySQLPassword,
    database: `KingoftheWorking`,
    host: `localhost`,
    dialect: `mysql`
  },
  test: {
    username: `root`,
    password: process.env.mySQLPassword,
    database: `KingoftheTest`,
    host: `localhost`,
    dialect: `mysql`,

    logging: false
  },
  production: {
    useEnvVariable: process.env.JAWSDB_URL,

    dialect: `mysql`

  }
};
