const express = require("express");
const {db} = require("./database");
const server = express();
server.use(express.json());

server.get("/users", async (req, res) => {
  const result = await db.users.find().toArray();
  res.json(result);
});

server.post("/users", async (req, res) => {
  const {username, age, prof} = req.body;
  const result = await db.users.insertOne({username, age, prof});
  res.json(result);
});

server.listen(5050);
