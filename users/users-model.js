const db = require("../database/dataConfig");

module.exports = {
  find
};

function find() {
  return db("users").select("id", "username", "password");
}
