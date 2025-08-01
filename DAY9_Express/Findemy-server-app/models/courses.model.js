const mysql = require("mysql2/promise");

async function connectToDB() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "n3u3da!", // replace with your MySQL password
    database: "findemy_db",
  });
  return db;
}

async function getCourses() {
  try {
    const db = await connectToDB();
    if (!db) {
      throw new Error("Database connection failed");
    }
    const [rows] = await db.query("SELECT * FROM courses");
    return rows;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  } finally {
    await db.end();
  }
}

module.exports = {
  getCourses,
  connectToDB,
};

// Create a new db -> FindemyDB
// Create a table -> courses
// Insert some data into the courses table

// npm i mysql2
// use above code to connect to the DB
// make request using ThunderClient
// observe the response



