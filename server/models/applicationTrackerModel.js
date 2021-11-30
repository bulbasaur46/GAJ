const { Pool } = require('pg');

require('dotenv').config();
const SQL_URI = process.env.SQL_URI;

const pool = new Pool({
  connectionString: SQL_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query:', text);
    return pool.query(text, params, callback);
  }
};
