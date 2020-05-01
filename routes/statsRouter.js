const express = require('express');

// add user router
const statsRouter = express.Router();

// require the user controller
const statsController = require('../controllers/statsController.js');

statsRouter.get('/highscores', statsController.getTopUsers);
statsRouter.get('/user-highscore/:id', statsController.getHighscoreByID);
statsRouter.get('/user-record', statsController.getUserRecord);

// export the router
module.exports = statsRouter;