const mongoose = require('mongoose');
const ATLASDB = require('./config').ATLASDB;

module.exports = function () {

    mongoose.connect(ATLASDB);

    const mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', () => {
        console.log("Connected to MongoDB.");
    })
}