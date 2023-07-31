const express = require("express"); // load the installed package
const app = express(); // use the package to create a server called "app"

const path = require("path")

const PORT = 3001;

// middlewares
app.use(express.static("public"));

// create routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

// app.get("/assets/css/styles.css", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/assets/css/styles.css"))
// })

// app.get("/assets/js/index.js", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/assets/js/index.js"))
// })


app.listen(PORT, () => {
    // console.log("Server is running on PORT " + PORT)
    console.log(`Server is running on PORT ${PORT}`);
})