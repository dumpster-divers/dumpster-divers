var express = require('express');
var trashController = require('../controllers/trashController')
var trashRouter = express.Router();

// Add find global count GET route
trashRouter.get('/global-count', trashController.getRemaining);

// Add increase count POST route
trashRouter.post('/increment-user-count', trashController.postIncrease);

module.exports = trashRouter;
