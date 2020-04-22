const mongoose = require("mongoose");
const Users = require("../models/users");
const gfy = require("gfycat-style-urls");

const getAllUsers = (req, res) => {
  Users.find({}, (err, users) => {
    res.send(users);
  });
};

//Generate a unique id, ensuring it doesn't already exist in database
const generateId = async () => {
  let generatedusername = gfy.generateCombination(2, "-", true);

  //Check whether username exists already
  let doesExist = await Users.exists({ username: generatedusername });

  if (doesExist) {
    return generateId();
  } else {
    return new Promise(resolve => {
      resolve(generatedusername);
    });
  }
};

const addUser = async (req, res) => {
  let newUser = Users();
  let username = await generateId();

  newUser.name = req.body.name;
  newUser.dateJoined = Date.now();
  newUser.processedTotal = req.body.processedTotal;
  newUser.username = username;

  newUser.save((err, user) => {
    if (err) {
      console.log("Failed to save user");
      res.error("Failed to save user");
    } else {
      res.send({
        name: req.body.name,
        username: username
      });
    }
  });
};

module.exports = {
  addUser,
  getAllUsers
};
