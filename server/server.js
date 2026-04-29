import express from "express";
import mysql from "mysql2";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/students/signup", (req, res) => {
  const { name, email, matricNumber, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ Error: "Missing required fields" });
  }

  const checkUser = "SELECT * FROM students WHERE email = ?";
  
  db.query(checkUser, [email], (err, data) => {
    if (err) return res.json({ Error: "Database error" });

    if (data.length > 0) {
      return res.json({ Error: "User already exists" });
    }

    const sql = "INSERT INTO students (name, email, matricNumber, password) VALUES (?, ?, ?, ?)";

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.json({ Error: "Error hashing password" });
      }    

      const values = [name, email, matricNumber, hash];

      db.query(sql, values, (err, result) => {
        if (err) {
          return res.json({ Error: "Insert error in server" });
        }

        return res.json({ Status: "success" });
      }); 
    });
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});