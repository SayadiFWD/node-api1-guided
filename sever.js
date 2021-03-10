const express = require("express");
const db = require("./database");
const server = express();
server.use(express.json());

server.get("/users", (req, res) => {
  const users = db.getUsers();
  res.status(200).json(users);
});

server.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = db.getUserById(id);
  res.status(200).json(user);
});

server.post("/users", (req, res) => {
  const newUser = db.createUser({
    name: req.body.name,
  });
  res.status(201).json(newUser);
});

server.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = db.getUserById(id);
  if (user) {
    const updateUser = db.updateUser(id, {
      name: req.body.name,
    });
    res.json(updateUser);
  } else {
    res.status(404).jsonson({
      menubar: "User not found",
    });
  }
});

server.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = db.getUserById(id);
  if (user) {
    db.deleteUser(id);
    res.status(204).end();
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
});

module.exports = server;
