const router = require('express').Router();
const users = require('../db/queries/users');

router.get("/:id", (req, res) => {
  users
    .getUserById(req.params.id)
    .then((user) => {
      res.json({ user });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting user by id: ${e.message}`,
      });
    });
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.getUserByEmail(email);

    req.session.userID = user.id;
    res.json({
      user: {
        email: user.email,
        id: user.id,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;