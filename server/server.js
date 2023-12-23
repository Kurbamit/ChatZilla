const http = require("http");
const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");
const app = require("./app");

const port = process.env.port || 3001;

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    transports: ["websocket"],
    credentials: true,
  },
});

// WebSocket connection handling
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle WebSocket events here
  socket.on("chat message", (msg) => {
    console.log(`Received message: ${msg}`);
    io.emit("chat message", msg); // Broadcast the message to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
