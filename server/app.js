const express = require("express");
const app = express();
const cors = require("cors");

const usersRoutes = require("./api/routes/usersRoutes");
const { error } = require("console");

const fetchUsers = require("./database");

// app.use("/users", usersRoutes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Update with your client's origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

fetchUsers();

app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

// Handles all kind of errors being thrown
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;
