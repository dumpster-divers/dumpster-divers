var express = require('express');
var trashRouter = express.Router();
var trashController = require('../controllers/trashController')

trashRouter.get('/', trashController.getTest);
trashRouter.get('/tally', trashController.getTally);

module.exports = trashRouter;
