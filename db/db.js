const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/DreamTeam'

const db = mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((data) => {
      console.log('connected to mongo')
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = db;

