const express = require('express');
const statsController = require('../controllers/statsController.js');
const statsRouter = express.Router();

statsRouter.get('/leaderboard', statsController.getTopUsers);
statsRouter.get('/user-highscore/:username', statsController.getHighscoreByID);
statsRouter.get('/user-record/:username', statsController.getUserRecord);

// export the router
module.exports = statsRouter;
