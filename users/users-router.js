const router = require("express").Router();

const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      if (users.length > 0) {
        res.json(users);
      } else {
        res.status(404).json({ message: "There are no users in the database" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Error finding users" });
    });
});

module.exports = router;
