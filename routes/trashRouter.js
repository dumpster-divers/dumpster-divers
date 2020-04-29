var express = require('express');
var trashController = require('../controllers/trashController')
var trashRouter = express.Router();

trashRouter.post('/increment-user-count', trashController.postIncrease);

trashRouter.post('/add', trashController.add);
trashRouter.get('/data', trashController.getData);
trashRouter.delete('/delete', trashController.deleteTrash);
module.exports = trashRouter;
