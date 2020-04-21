const express = require('express');

// add user router
const userRouter = express.Router();

// require the user controller
const userController = require('../controllers/userController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
userRouter.get('/top-users', userController.getTopUsers);

// export the router
module.exports = userRouter;
