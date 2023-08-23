const router = require('express').Router();
const users = require('../db/queries/users');

router.get('/login', (req, res) => {
  console.log("here");
  users
    .getUserByUserName("Mint")
    .then((user) => {
      res.json({ user });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting user by username: ${e.message}`,
      });
    });
});

module.exports = router;