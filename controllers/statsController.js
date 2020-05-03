// import user model
const Users = require("../models/Users");

// Function to handle a request to get the 10 users with highest scores
const getTopUsers = async (req, res) => {
  const allUsers = await Users.find();
  const sortedUsers = allUsers.sortBy("processedTotal");
  const topUsers = sortedUsers.slice(0, 10);
  res.send(topUsers); // return the list of top 10 users
};

const getHighscoreByID = async (req, res) => {
  const allUsers = await Users.find();
  const sortedUsers = allUsers.sortBy("processedTotal");
  // search for user in the database via their ID
  const user = allUsers.find(user => user.username === req.query.username);
  if (user) {
    const userRank = sortedUsers.indexOf(user) + 1;
    res.send({ user, userRank });
  } else {
    // if an user is not found, return user does not exist.
    res.send("User Does Not Exist");
  }
};

const getUserRecord = (req, res) => {
  Users.findOne(
    {
      username: req.query.username
    },
    (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).send(user);
      } else if (!user) {
        return res.send("User Does Not Exist");
      } else {
        res.send({record: user.processedRecord});
      }
    }
  );
};

// Function to sort array of objects by an attribute
Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a, b) {
    return a[p] > b[p] ? -1 : a[p] < b[p] ? 1 : 0;
  });
};

// Export the callbacks
module.exports = {
  getTopUsers,
  getHighscoreByID,
  getUserRecord
};
