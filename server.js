const express = require("express"); // load the installed package
const app = express(); // use the package to create a server called "app"

const path = require("path")

const PORT = 3001;

// create routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(PORT, () => {
    // console.log("Server is running on PORT " + PORT)
    console.log(`Server is running on PORT ${PORT}`);
})