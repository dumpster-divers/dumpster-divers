const mongoose = require("mongoose");
const Users = require("../models/users");
const gfy = require("gfycat-style-urls");

const getAllUsers = (req, res) => {
  Users.find({}, (err, users) => {
    res.send(users);
  });
};

const addUser = async (req, res) => {
  let newUser = Users();
  let username = await generateUniqueId();

  newUser.name = req.body.name;
  newUser.dateJoined = Date.now();
  newUser.processedTotal = req.body.processedTotal;
  newUser.username = username;

  newUser.save((err, user) => {
    if (err) {
      console.log("Failed to save user");
      res.status(500);
      res.render('error', {error: err});
    } else {
      res.send({
        name: req.body.name,
        username: username
      });
    }
  });
};

//Generate a unique id, ensuring it doesn't already exist in database
const generateUniqueId = async () => {
  let generatedUsername = gfy.generateCombination(2, "-", true);

  //Check whether username exists already
  let usernameUsed = await Users.exists({ username: generatedUsername });

  if (!usernameUsed) {
    return new Promise(resolve => {
      resolve(generatedUsername);
    });
  } else {
    return generateUniqueId();
  }
};

module.exports = {
  addUser,
  getAllUsers
};
