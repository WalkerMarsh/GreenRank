const { userController } = require('../controllers/userController');
const { Router } = require('express');
const { ScoresModel } = require('../models');
const { scoresController } = require('../controllers/scoresController');

const router = Router();

router.get(
  '/ranks',
  scoresController.getRanks,
  (req, res) => res.status(200).json({ ranks: res.locals.ranks })
);

router.get(
  '/getUserScores',
  scoresController.getAllScoresByGoogleId,
  (req, res) => res.status(200).json({ scores: res.locals.scores })
);

module.exports = router;