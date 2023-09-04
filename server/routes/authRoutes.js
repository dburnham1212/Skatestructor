const router = require('express').Router();
const users = require('../db/queries/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/login', (req, res) => {
  const { userName, password } = req.body.loginUser;
  users
    .getUserByUserName(userName)
    .then((user) => {
      if(!user || !bcrypt.compareSync(password, user.password)) {
        res.status(401).json({ error: "Incorrect email/password"});
      }

      req.session.userId = user.id;
      res.json({ user });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting user by username: ${e.message}`,
      });
    });
});

router.post('/autoLogin', async (req, res) => {
  try {
    if(req.session.userId) {
      const user = await users.getUserById(req.session.userId);
      res.json({user});
    }
  } catch(error) {
      res.status(500).json({ error: error.message});
  };
});

router.post("/logout", async (req, res) => {
  try {
    req.session = null;
    res.status(200).json({ message: "logout successful "});
  } catch(error) {
    res.status(500).json({ error: error.message});
  };
})


router.post('/register', async (req, res) => {
  try {
    const user = req.body.user;

    const createdUser = await users.getUserByUserNameOrEmail(user.userName, user.email);

    if (createdUser) {
      return res.status(400).json({ error: 'Username or email already registered'});
    } else if (user.password !== user.passwordConfirmation) {
      return res.status(400).json({ error: 'Passwords did not match'});
    }

    user.password = bcrypt.hashSync(user.password, saltRounds);
    req.session.userId = user.id;
    const result = await users.createUser(user);
    res.json({result});
  } catch(error) {
      res.status(500).json({ error: error.message});
  };
});

module.exports = router;