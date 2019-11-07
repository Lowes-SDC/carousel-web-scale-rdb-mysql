require("newrelic");
const express = require('express');
const db = require('./db.js');
const cors = require('cors');
const app = express();
const port = 5555;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/client"));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  });



 app.get('/items', (req, res) => {
   let itemId = req.query.itemId;
   db.group(itemId, (err, result) => {
    if (err) {
        console.log(err);
        res.send(err)
    } else {
        res.send(result);
    }
});

  });

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("listening on port " + port);
    }
});