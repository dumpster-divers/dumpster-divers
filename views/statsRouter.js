const express = require('express');

// add user router
const statsRouter = express.Router();

// require the user controller
const statsController = require('../controllers/statsController.js');

statsRouter.get('/leaderboard', statsController.getTopUsers);
statsRouter.get('/user-highscore/:username', statsController.getHighscoreByID);
statsRouter.get('/user-record/:username', statsController.getUserRecord);

// export the router
module.exports = statsRouter;
