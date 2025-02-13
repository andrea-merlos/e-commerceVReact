import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
// This line creates an instance of an Express application,
// which will be used to define routes and middleware.

const db = mysql.createConnection({
  host: process.env.STACKHERO_MYSQL_HOST,
  user: process.env.STACKHERO_MYSQL_USER,
  password: process.env.STACKHERO_MYSQL_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.STACKHERO_MYSQL_PORT || 3306,
  ssl: { rejectUnauthorized: true },
});

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "../dist");

// Serve static files from the 'dist' directory
app.use(express.static(distPath));

app.get("/", (req, res) => {
  res.send("heyo");
});
//This line defines a route for the root URL (/)

app.get("/api/products", (req, res) => {
  const sql = "SELECT * FROM products"; //query
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data); //retrive data jason response
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("listening");
}); //starts and logs

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected successfully!");
  }
});
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});
