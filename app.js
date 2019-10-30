const express = require('express');
const db = require('./db.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/client"));

app.post("/items", (req, res) => {
    db.getItems(req.body.itemId, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
});

let port = 3001;
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("listening on port " + port);
    }
});



// app.post("/categories", (req, res) => {
//     db.getCategory(req.body.itemId, (err, data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     })
// })