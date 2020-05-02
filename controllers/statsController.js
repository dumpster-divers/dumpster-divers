// import user model
const Users = require('../models/Users');

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
  const user = all_users.find(user => user.username === req.params.id);
  if (user){
    res.send(user.processedRecord); // send back the user details
  }
  else{
    // if an user is not found, return user does not exist.
    res.send('User Does Not Exist');
  }
};

const getUserRecord = (req, res) => {
  res.send("Unimplemented Function");
};

// Function to sort array of objects by an attribute
Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? -1 : (a[p] < b[p]) ? 1 : 0;
  });
}

// Export the callbacks
module.exports = {
  getTopUsers,
  getHighscoreByID,
  getUserRecord
};
