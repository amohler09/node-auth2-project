const express = require("express");

const usersRouter = require("../users/users-router");
const authRouter = require("../auth//auth-router");
const restricted = require("../auth/restricted-middleware");

const server = express();

server.use(express.json());

server.use("/api/users", restricted, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "Working!" });
});

module.exports = server;
