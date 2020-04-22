const express = require('express');

// add user router
const highscoreRouter = express.Router();

// require the user controller
const highscoreController = require('../controllers/highscoreController.js');

// handle the GET request on root of author-management path,
highscoreRouter.get('/top-users', highscoreController.getTopUsers);

// export the router
module.exports = highscoreRouter;
