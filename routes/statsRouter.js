const express = require('express');

// add user router
const statsRouter = express.Router();

// require the user controller
const highscoreController = require('../controllers/statsController.js');

// handle the GET request on root of author-management path,
statsRouter.get('/top-users', highscoreController.getTopUsers);
statsRouter.get('/:id', highscoreController.getHighscoreByID);


// export the router
module.exports = statsRouter;
