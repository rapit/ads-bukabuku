import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Surya141001.",
  database: "bukabuku",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Terhubung ke database MySQL");
});

app.use(express.json());
app.use(cors());

app.post("/pintubelakang", (req, res) => {
  const { email, password, username } = req.body;

  const query = "INSERT INTO user (email, password, name) VALUES (?, ?, ?)";
  db.query(query, [email, password, username], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Gagal menyimpan data" });
    } else {
      res.json({ message: "Data berhasil disimpan" });
    }
  });
});

app.post("/checklogin", (req, res) => {
    const { email, password } = req.body;
  
    const query = "SELECT * FROM user WHERE email = ? AND password = ?";
    db.query(query, [email, password], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
      } else {
        if (result.length > 0) {
          res.json({ success: true, message: "Login successful" });
        } else {
          res.json({ success: false, message: "Invalid email or password" });
        }
      }
    });
  });
  

app.get("/", (req, res) => {
  res.json("halo dari belakang");
});

app.listen(8800, () => {
  console.log("kita terhubung");
});
