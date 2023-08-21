const router = require('express').Router();
const challenges = require('../db/queries/challenges');

router.get("/trick/:id", (req, res) => {
  challenges
    .getChallengesByTrickId(req.params.id)
    .then((challenges) => {
      res.json({ challenges });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting challenges by trick_id: ${e.message}`,
      });
    });
});

module.exports = router;