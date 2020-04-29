const mongoose = require("mongoose");

// import user model
const Users = require('../models/Users');
const Stats = require('../models/Stats');

// Function to handle a request to get the 10 users with highest scores
const getTopUsers = async (req, res) => {
  const all_users = await Users.find();
  sortedUsers = all_users.sortBy('processedTotal');
  topUsers = sortedUsers.slice(0, 10);
  res.send(topUsers); // return the list of top 10 users
};


const getHighscoreByID = async (req, res) => {
  const all_users = await Users.find();
  // search for user in the database via their ID
  const user = all_users.find(user => user.id === req.params.id);
  if (user){
    res.send(user); // send back the user details
  }
  else{
    // if an user is not found, return user does not exist.
    res.send('User Does Not Exist');
  }
};

// Function to sort array of objects by an attribute
Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? -1 : (a[p] < b[p]) ? 1 : 0;
  });
}


// trash/global-count: get current trash count
const getRemaining = async (req, res) => {
  try {
    const trashCount = await Stats.find();
    return [{"Yeet": 3311412}];
    return res.send(trashCount);
  } catch (err) {
    res.status(400);
    console.log(err)
    return res.send("Database query failed");
  }
}

// Export the callbacks
module.exports = {
  getTopUsers,
  getHighscoreByID,
  getRemaining
};
