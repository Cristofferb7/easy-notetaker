const express = require("express"); // load the installed package
const app = express(); // use the package to create a server called "app"

const path = require("path")
const fs = require("fs")

const PORT = process.env.PORT || 3001 ;

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// create HTML routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

// create API routes
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        const db = JSON.parse(data)

        res.json(db)
    })
})

app.post("/api/notes", (req, res) => {
    // check the data sent
    console.log(req.body)

    // read the current db
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        const db = JSON.parse(data)

        // add new data to db
        db.push(req.body);

        // update the file for the db
        fs.writeFile("./db/db.json", JSON.stringify(db), () => {
            res.json(db)
        })
        
    })
})

// create delete routes
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        const db = JSON.parse(data)

        res.json(db)
    })
})

app.listen(PORT, () => {
    // console.log("Server is running on PORT " + PORT)
    console.log(`Server is running on PORT ${PORT}`);
})