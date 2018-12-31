//converted config.json to config.js so we can protect data with env variables
require(`dotenv`).config();

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
