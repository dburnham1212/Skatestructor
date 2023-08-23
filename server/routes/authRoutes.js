const router = require('express').Router();
const users = require('../db/queries/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/login', (req, res) => {
  const { userName, password } = req.body.user;
  users
    .getUserByUserName(userName)
    .then((user) => {
      if(bcrypt.compareSync(password, user.password)){
        res.json({ user });
      } else {
        res.json('user not found')
      }
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting user by username: ${e.message}`,
      });
    });
});

module.exports = router;