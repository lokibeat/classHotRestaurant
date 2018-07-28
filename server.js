var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var reservations = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    //  loads the home page
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/reserve', (req, res) => {
    //  loads the reservation web page
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get('/api/reserve', (req, res)=>{
    //  Returns JSON data for each element
    reservations.forEach((element)=>{
        return res.json(element);
    });
    return res.json(false);
});

app.get('/book', (req, res) => {
    //  Loads the booking webpage
    res.sendFile(path.join(__dirname, "book.html"));
});

app.post('/api/book', (req, res)=>{
    //  Pull data from the AJAX post
    var newRes = req.body;
    //  Create a routeName to create url path for each resie
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
    //  Console log the information in the new reservation
    console.log(newRes);
    //  Push the new reservation to the reservations array
    reservations.push(newRes);
    //  Parse create JSON object from new resie
    res.json(newRes);
})

app.listen(PORT, function () {
    //  listens for changes in the PORT
    console.log("App listening on PORT " + PORT);
});