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

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
