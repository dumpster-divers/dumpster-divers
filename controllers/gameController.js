const mongoose = require("mongoose");
const Stats = require('../models/Stats');
const Users = require('../models/Users');
const Trash = require('../models/Trash');

// game/add-session-stats: decrase the global count and increase user's total processed
const addSessionStats = async (req, res) => {
  // Must pass in a count
  if (req.body.count === undefined) return res.status(400).send('No count provided');

  // Get current count
  const trashCount = await Stats.findOne();
  let remaining = trashCount.globalRemaining;

  // Don't let count fall below 0
  remaining = Math.max(0, remaining - req.body.count);

  // Decrease global count count
  Stats.updateOne({}, { globalRemaining: parseInt(remaining) }, {}, err => {
    if (err) console.log(err);
  });
 
  // Increment user count  (optional)
  if (req.body.username !== undefined) {
    updateUserSessions(req.body.count, req.body.username);
  }

  return res.send();
};

//get random trash for a level
const getData = (req, res) => {
  // Get 1 by default
  var amount = req.query.amount !== undefined ? req.query.amount: 1;
  var randomTrash = generateNRandomTrash(amount);
  res.send(randomTrash);
};

// trash/global-count: get current trash count
const getRemaining = async (req, res) => {
  try {
    const trashCount = await Stats.find();
    return res.send(trashCount);
  } catch (err) {
    res.status(400);
    console.log(err)
    return res.send("Database query failed");
  }
}

const updateUserSessions = async (count, username) => {
  // Update procesesdTotal and get current record
  const user = await Users.findOneAndUpdate(
    {username: username},
    {$inc: {processedTotal: count}}, 
    err => {if (err) console.log(err);}
  ).select('processedRecord');

  // Update record if higher
  if (count > user.processedRecord) {
    Users.findOneAndUpdate(
      {username: username},
      {$set: {processedRecord: count}},
      err => {if (err) console.log(err);}
    );
   }
}

//function to generate an array of random trash
generateNRandomTrash = function(n){
  var randomTrash = [];
  for(i=0;i<n;i++){
    randomTrash.push(generateRandomTrash());
  }
  return randomTrash;
}

//function to give a random trash
generateRandomTrash = function(){
  var randomID = Math.floor((Math.random()*Trash.length)+1);
  var randomTrash = Trash.find(randomTrash => randomTrash.id === randomID);
  return randomTrash;
}

module.exports = {
  addSessionStats,
  getData,
  getRemaining
};