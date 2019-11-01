require("newrelic");
const axios = require('axios');
const express = require('express');
const { carItem } = require('./db.js');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5555;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/client"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

 app.post('/item', (req, res) => {
    carItem.find({ ProductId: req.body.itemId })
    .then(item => {
        carItem.find({ Category: item.Category }).limit(10)
        .then(doc => {
            res.status(200).send(doc);
          })
          .catch(err => {
            console.log(err);
            res.status(500).end();
          });
    })
  });


// app.post("/items", (req, res) => {
//     db.getItems(req.body.itemId, (err, data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     })
// });


app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("listening on port " + port);
    }
});
//