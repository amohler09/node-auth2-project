const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "Working!" });
});

module.exports = server;
