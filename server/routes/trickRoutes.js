const router = require('express').Router();
const tricks = require('../db/queries/tricks');

router.get("/", (req, res) => {
  tricks
    .getAllTricks()
    .then((tricks) => {
      res.json({ tricks });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting all tricks: ${e.message}`,
      });
    });
});

router.get("/:id", (req, res) => {
  tricks
    .getTrickById(req.params.id)
    .then((trick) => {
      res.json({ trick });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting trick by id: ${e.message}`,
      });
    });
});

module.exports = router;