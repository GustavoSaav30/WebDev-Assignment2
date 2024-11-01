const createError = require('http-errors');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Portfolio Backend API');
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {

    // Send the error message
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message
    });
});

module.exports = app;