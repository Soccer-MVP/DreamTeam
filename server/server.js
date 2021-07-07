const express = require('express');
const morgan = require('morgan')
const db = require('../db/db.js')
const path = require('path');
const port = 4000;

const app = express();

app.use(express.json());
app.use(morgan());


app.use(express.static(path.join(__dirname, '..', 'client/public')))

// app.get('/', function (req, res) {
//     res.send('hello world')
// })

app.listen(port, function() {
    console.log("DreamTeam RESTful API listening on port " + port);
});

module.exports = app;