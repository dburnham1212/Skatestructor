const router = require('express').Router();
const challengeRecords = require('../db/queries/challengeRecords');

router.get("/challenge/:challengeId", (req, res) => {
  challengeRecords
    .getChallengeRecordByChallengeId(req.params.challengeId)
    .then((challengeRecord) => {
      res.json({ challengeRecord });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting challenge rocord by challenge_id: ${e.message}`,
      });
    });
});

router.get("/user/:userId/challenge/:challengeId", (req, res) => {
  challengeRecords
    .getChallengeRecordByChallengeAndUserId(req.params.userId, req.params.challengeId)
    .then((challengeRecord) => {
      res.json({ challengeRecord });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting challenge rocord by challenge_id: ${e.message}`,
      });
    });
});

router.post('/user/:userId/challenge/:challengeId', (req, res) => {
  challengeRecords
    .createRecord(req.params.userId, req.params.challengeId)
    .then((challengeRecord) => {
      res.json({ challengeRecord });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error creating record: ${e.message}`,
      });
    });
});


module.exports = router;