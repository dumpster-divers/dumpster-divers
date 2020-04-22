const mongoose = require("mongoose")
const Users = require("../models/users")
const gfy = require("gfycat-style-urls")

const getAllUsers = (req, res) => {
  Users.find({}, (err, users) => {
    res.send(users);
  })
}

const addUser = (req, res) =>   {

  let newUser = Users();
  let username = gfy.generateCombination(2, "-", true);

  newUser.name = req.body.name;
  newUser.dateJoined = Date.now();
  newUser.processedTotal = req.body.processedTotal;
  newUser.username = username;

  console.log(newUser);

  newUser.save(
    (err, user) => {
      if (err) {
        console.log("Failed to save user");
        res.error("Failed to save user")
      } else {
        res.send({
          name: req.body.name,
          username: username
        });
      }
    }
  );
}



module.exports = {
  addUser, getAllUsers
}