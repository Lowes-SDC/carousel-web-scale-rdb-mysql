const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'fec-hallowes-carousel.cgmhnhykd7qi.us-east-2.rds.amazonaws.com',
    user: 'atgeorge11',
    password: 'atgeorge11',
    database: 'fec_hallowes_carousel'
})

db.connect(function (err) {
    if (err) {
        console.log('error: ' + err);
        return;
    }
    console.log('Connected to database');
})

const getItems = function(itemId, callback) {
    let queryString = "SELECT * FROM items WHERE categoryId = (SELECT categoryId FROM items WHERE id = ?);";
    let options = [itemId];
    db.query(queryString, options, (err, results, field) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    })
}

module.exports.getItems = getItems;

// const getCategory = function (itemId, callback) {
    //     let queryString = "SELECT categoryId FROM items WHERE id = ?;";
    //     let options = [itemId];
    //     db.query(queryString, options, (err, results, field) => {
    //         if (err) {
    //             callback (err, null);
    //         } else {
    //             callback (null, results);
    //         }
    //     })
    // }