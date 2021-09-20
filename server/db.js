const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: process.env.pgPassword,
  host: "localhost",
  port: 5432,
  database: "cohyve"
});

module.exports = pool;
