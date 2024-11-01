const mongoose = require('mongoose');
const ATLASDB = require('./config.js');

module.exports = function () {
    console.log(ATLASDB.ATLASDB)
    mongoose.connect(ATLASDB.ATLASDB);

    const mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', () => {
        console.log("Connected to MongoDB.");
    })
}