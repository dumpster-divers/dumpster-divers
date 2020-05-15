const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/get-all", userController.getAllUsers);
userRouter.post("/add", userController.addUser);
userRouter.delete("/delete", userController.deleteUser);
userRouter.put("/update", userController.updateUser);
userRouter.get("/login", userController.loginUser);

module.exports = userRouter;
