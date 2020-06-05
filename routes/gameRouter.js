const express = require('express');
const gameController = require('../controllers/gameController')
const gameRouter = express.Router();

gameRouter.get('/data', gameController.getData);
gameRouter.post('/add-session-stats', gameController.addSessionStats);
gameRouter.get('/global-count', gameController.getRemaining);

module.exports = gameRouter;
