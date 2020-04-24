const mongoose = require("mongoose");

// import user model
var users = require('../models/users');
//var users = mongoose.model("Users");

// test function to handle a request to get all users
const getAllUsers = async (req, res) => {

  try {
    const all_users = await users.find();
    return res.send(all_users);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};

// Function to handle a request to get the 10 users with highest scores
const getTopUsers = async (req, res) => {
  const all_users = await users.find();
  sortedUsers = all_users.sortBy('processedTotal');
  topUsers = sortedUsers.slice(0, 10);
  res.send(topUsers); // return the list of top 10 users
};

// Function to sort array of objects by an attribute
Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? -1 : (a[p] < b[p]) ? 1 : 0;
  });
}

const getHighscoreByID = (req, res) => {
  // search for user in the database via their ID
  const user = users.find(user => user.id === req.params.id);
  if (user){
    res.send(user); // send back the user details
  }
  else{
    // if an user is not found, return user does not exist.
    res.send('User Does Not Exist');
  }
};

// Export the callbacks
module.exports = {
  getTopUsers,
  getHighscoreByID,
  getAllUsers,
};
