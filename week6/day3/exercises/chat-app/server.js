const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let users = {};
let rooms = {};

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);
    users[socket.id] = { username, room };

    // Message de bienvenue
    socket.emit("message", `Bienvenue ${username} !`);
    // Notifier les autres
    socket.to(room).emit("message", `${username} a rejoint le salon`);

    updateUsersInRoom(room);
  });

  socket.on("chatMessage", (msg) => {
    const user = users[socket.id];
    if (user) {
      io.to(user.room).emit("message", `${user.username}: ${msg}`);
    }
  });

  socket.on("disconnect", () => {
    const user = users[socket.id];
    if (user) {
      const room = user.room;
      io.to(room).emit("message", `${user.username} a quitté le salon`);
      delete users[socket.id];
      updateUsersInRoom(room);
    }
  });

  function updateUsersInRoom(room) {
    const userList = Object.values(users)
      .filter((u) => u.room === room)
      .map((u) => u.username);
    io.to(room).emit("userList", userList);
  }
});

server.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
