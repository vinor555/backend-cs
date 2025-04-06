const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,      // csgo_db
  process.env.DB_USER,      // csgo_user
  process.env.DB_PASS,      // csgo_pass
  {
    host: process.env.DB_HOST, // db
    port: process.env.DB_PORT, // 5432
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;