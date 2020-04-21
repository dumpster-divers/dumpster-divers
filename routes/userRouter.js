const express = require('express');

// add user router
const userRouter = express.Router();

// require the user controller
const userController = require('../controllers/userController.js');

// handle the GET request on root of author-management path,
// test get all users
userRouter.get('/', userController.getAllUsers);
userRouter.get('/top-users', userController.getTopUsers);

// export the router
module.exports = userRouter;
