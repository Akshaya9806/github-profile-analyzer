const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

connection.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
    console.log(err);
  } else {
    console.log("MySQL Connected");

    const createTable = `
      CREATE TABLE IF NOT EXISTS github_profiles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255),
        bio TEXT,
        public_repos INT DEFAULT 0,
        followers INT DEFAULT 0,
        following INT DEFAULT 0,
        account_age_days INT DEFAULT 0,
        total_stars INT DEFAULT 0,
        avg_stars DECIMAL(10,2) DEFAULT 0,
        top_language VARCHAR(100),
        profile_url TEXT,
        search_count INT DEFAULT 1,
        last_searched DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;

    connection.query(createTable, (err) => {
      if (err) {
        console.log("Table Creation Failed");
        console.log(err);
      } else {
        console.log("github_profiles Table Ready");
      }
    });
  }
});

module.exports = connection;