var express = require("express");
var userController = require("../controllers/userController");
var userRouter = express.Router();

userRouter.get("/getAll", userController.getAllUsers);
userRouter.post("/add", userController.addUser);
userRouter.delete("/delete", userController.deleteUser);
userRouter.put("/update", userController.updateUser);

module.exports = userRouter;
