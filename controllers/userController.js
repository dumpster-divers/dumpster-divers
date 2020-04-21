// provide the controller a link to the user model
var users = require('../models/users.js');

// Function to handle a request to get the 10 users with highest scores
const getTopUsers = (req, res) => {
  sortedUsers = users.sort(compareValues('trashRecycled'));
  topUsers = sortedUsers.slice(1, 10);

  res.send(topUsers); // return the list of top 10 users
};

// Dynamic Sort function
function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

// Remember to export the callbacks
module.exports = {
  getTopUsers,
};
