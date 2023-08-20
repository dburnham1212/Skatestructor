const router = require('express').Router();
const trickInstructions = require('../db/queries/trickInstructions');

router.get("/trick/:trick_id", (req, res) => {
  trickInstructions
    .getAllInstructionsByTrick(req.params.trick_id)
    .then((trickInstructions) => {
      res.json({ trickInstructions });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting all tricks: ${e.message}`,
      });
    });
});

module.exports = router;