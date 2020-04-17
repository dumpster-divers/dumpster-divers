var express = require('express');
var trashController = require('../controllers/trashController')
var trashRouter = express.Router();

trashRouter.get('/', trashController.getTest);
trashRouter.get('/tally', trashController.getTally);

module.exports = trashRouter;
