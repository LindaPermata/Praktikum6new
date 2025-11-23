require('dotenv').config();

const dbConfig = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.DB_PASSWORD || "kripik879",
  DB: process.env.DB_NAME || "tugasapikey_db",
  PORT: 3308
};

module.exports = dbConfig;