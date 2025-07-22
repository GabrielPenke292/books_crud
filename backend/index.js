import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "books"
});

app.get("/", (req, res) => {
    res.json({message: "Hello World"});
});

app.get("/books", (req, res)=>{
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
