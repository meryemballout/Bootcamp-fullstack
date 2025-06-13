const socket = io();
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
const room = urlParams.get("room");

socket.emit("joinRoom", { username, room });

const form = document.getElementById("msgForm");
const input = document.getElementById("msgInput");
const messages = document.getElementById("messages");
const userList = document.getElementById("userList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("chatMessage", input.value);
  input.value = "";
});

socket.on("message", (msg) => {
  const div = document.createElement("div");
  div.textContent = msg;
  messages.appendChild(div);
});

socket.on("userList", (users) => {
  userList.innerHTML = "<strong>Utilisateurs actifs :</strong><br>" + users.join("<br>");
});
