// provide the controller a link to the user model
var users = require('../models/users.js');

// Function to handle a request to get the 10 users with highest scores
const getTopUsers = (req, res) => {
  sortedUsers = users.sortBy('trashRecycled');
  topUsers = sortedUsers.slice(0, 10);

  res.send(topUsers); // return the list of top 10 users
};

// Sort array of objects by an attribute function
Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? -1 : (a[p] < b[p]) ? 1 : 0;
  });
}

// Remember to export the callbacks
module.exports = {
  getTopUsers,
};
