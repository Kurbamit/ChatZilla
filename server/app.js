const express = require('express');
const app = express();

const usersRoutes = require('./api/routes/usersRoutes');
const { error } = require('console');

const fetchUsers = require('./database');

app.use('/users', usersRoutes)

fetchUsers();

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    // forward error request for next 
    next(error);
});

// Handles all kind of errors being thrown
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;   