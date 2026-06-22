// main file server.js

//const math = require('./math');
//console.log(math ,"Math operations:");
//console.log(math.add(2,3));
//console.log(math.sub(5,2));

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is a home page");
});

app.get("/about", (req, res) => {
    res.send("This is an about page");
});

app.get("/contact", (req, res) => {
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>Contact Us</h1>
                <button>Contact</button>
            </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});