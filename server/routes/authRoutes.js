const router = require('express').Router();
const users = require('../db/queries/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/login', (req, res) => {
  const { userName, password } = req.body.user;
  users
    .getUserByUserName(userName)
    .then((user) => {
      if(user && bcrypt.compareSync(password, user.password)) {
        res.json({ user });
      } else {
        res.status(401).json({ error: "Incorrect email/password"});
      }
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting user by username: ${e.message}`,
      });
    });
});

router.post('/register', async (req, res) => {
  try {
    const user = req.body.user;

    const createdUser = await users.getUserByUserNameOrEmail(user.userName, user.email);
    console.log(createdUser);
    if (createdUser) {
      return res.status(400).json({ error: 'Username or email already registered'});
    } else if (user.password !== user.passwordConfirmation) {
      return res.status(400).json({ error: 'Passwords did not match'});
    }

    user.password = bcrypt.hashSync(user.password, saltRounds);

    const result = users.createUser(user);
    res.json({result});
  } catch(error) {
      res.status(500).json({ error: error.message});
  };
});

module.exports = router;