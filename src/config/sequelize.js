const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: `${__dirname}/src/database/dbficr.sqlite`,
});

module.exports = { sequelize };
