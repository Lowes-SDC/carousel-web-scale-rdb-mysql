const { Client } = require('pg');
const env = require('./p.js');

const client = new Client({
    host: env.host,
    port: "7777",
    user: env.user,
    database: env.database,
    password: env.password
});

client.connect()
    .then(() => {
    console.log('Connected!');
    });


// let rand = Math.floor(Math.random() * Math.floor(2));
const group = (itemId, callback) => {
    client.query(`SELECT id, Names, Price, Rating, Reviews, Picture FROM carousel WHERE category = 
        (SELECT Category FROM carousel WHERE ID = ${itemId}) ORDER BY ID DESC
        LIMIT 10`, (err, res) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, res);
        }
    });
};

module.exports = { group };