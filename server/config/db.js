/* eslint-disable no-undef */
const mysql = require("mysql2");
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "news_portal",
  connectionLimit: 1000, // Adjust according to your needs
};
const pool = mysql.createConnection(dbConfig);
module.exports = pool;
