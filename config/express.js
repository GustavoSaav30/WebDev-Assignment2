const createError = require('http-errors');
const express = require('express');
const app = express();
const UserRouter = require('../routes/user')
const ContactRouter = require('../routes/user')
app.use(express.json());

app.use('/api/users', UserRouter);
app.use('/api/contacts', ContactRouter);


app.get('/', (req, res) => {
    res.send('Welcome to Portfolio Backend API');
});

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message
    });
});

module.exports = app;