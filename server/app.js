const express = require('express');
const app = express();

const usersRoutes = require('./api/routes/usersRoutes');

app.use('/users', usersRoutes)

module.exports = app;   