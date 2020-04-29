var express = require('express');
var trashController = require('../controllers/trashController')
var trashRouter = express.Router();

trashRouter.post('/increment-user-count', trashController.postIncrease);

module.exports = trashRouter;
