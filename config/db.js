const mysql = require("mysql");

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT || 3306,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});

connection.connect(err => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = connection;
