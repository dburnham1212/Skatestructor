const router = require('express').Router();
const challenges = require('../db/queries/challenges');

router.get("/:id", (req, res) => {
  challenges
    .getChallengeById(req.params.id)
    .then((challenge) => {
      res.json({ challenge });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting challenges by trick_id: ${e.message}`,
      });
    });
});

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