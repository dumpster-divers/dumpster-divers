var express = require('express');
var gameController = require('../controllers/gameController')
var gameRouter = express.Router();

gameRouter.get('/data', gameController.getData);
gameRouter.post('/add-session-stats', gameController.addSessionStats);
gameRouter.get('/global-count', gameController.getRemaining);

module.exports = gameRouter;
