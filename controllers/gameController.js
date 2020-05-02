const mongoose = require("mongoose");
const Stats = require('../models/Stats');
const Users = require('../models/Users');
const Trash = require('../models/Trash');

// game/add-session-stats: decrase the global count and increase user's total processed
const addSessionStats = async (req, res) => {
  // Get current count
  const trashCount = await Stats.find();
  let remaining = trashCount[0].globalRemaining;

  // Don't let count fall below 0
  remaining = Math.max(0, remaining - req.body.count);
  console.log(remaining);
  // Decrease global count count
  Stats.updateOne({}, { globalRemaining: parseInt(remaining) }, {}, err => {
    if (err) {
      console.log(err);
    }
  });

  return res.send();
};

//get random trash for a level
const getData = (req, res) => {
  var randomTrash = generateNRandomTrash(5);
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
  var randomID = Math.floor((Math.random()*10)+1);
  var randomTrash = Trash.find(randomTrash => randomTrash.id === randomID);
  return randomTrash;
}

module.exports = {
  addSessionStats,
  getData,
  getRemaining
};
