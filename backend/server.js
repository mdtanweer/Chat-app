const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// Socket.io
const http = require("http").Server(app);
const io = require("socket.io")(http);
io.on("connection", function (socket) {
  console.log("a user connected");
  socket.on("disconnect", function () {
    console.log("User Disconnected");
  });
  socket.on("example_message", function (msg) {
    console.log("message: " + msg);
  });
});

http.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
