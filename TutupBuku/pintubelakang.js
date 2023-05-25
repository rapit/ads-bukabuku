import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Surya141001.",
    database:"bukabuku"
})

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.json("halo dari belakang")
})

app.listen(8800, ()=> {
    console.log("kita terhubung")
})