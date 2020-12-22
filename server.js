var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var currentTables = [
    {
        
    }
]

var waitList = [
    {
        name: 'example',
        partySize: 0,
        contact: 'testcontact',
    }
]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
  
app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});
  
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/currentTables", function(req, res) {
    return res.json(currentTables);
});

app.get("/api/waitList", function(req, res) {
    return res.json(waitList);
});
  
app.post("/submit", function(req, res) {
    var newReservation = req.body;

    if (currentTables.length < 5) {
        currentTables.push(newreservation);
    } else {
        waitList.push(newReservation);
    }
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });