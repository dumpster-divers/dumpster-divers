var express = require('express');
var trashController = require('../controllers/trashController')
var trashRouter = express.Router();

trashRouter.post('/increment-user-count', trashController.postIncrease);

trashRouter.post('/add', trashController.unimplemented);
trashRouter.get('/data', trashController.unimplemented);
trashRouter.delete('/delete', trashController.unimplemented);
module.exports = trashRouter;
