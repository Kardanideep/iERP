
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Optional: Test DB connection once
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("Database Connected");
    connection.release();
  } catch (err) {
    console.log("DB Error:", err.message);
  }
})();

module.exports = db;
