const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database admin(user)
  process.env.DB_PASSWORD, // Database password
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);
