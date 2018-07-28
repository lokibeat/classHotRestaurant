var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname, "book.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});