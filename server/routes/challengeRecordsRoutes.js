const router = require('express').Router();
const challengeRecords = require('../db/queries/challengeRecords');

router.get("/challenge/:challenge_id", (req, res) => {
  challengeRecords
    .getChallengeRecordByChallengeId(req.params.challenge_id)
    .then((challengeRecord) => {
      res.json({ challengeRecord });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting challenge rocord by challenge_id: ${e.message}`,
      });
    });
});

module.exports = router;