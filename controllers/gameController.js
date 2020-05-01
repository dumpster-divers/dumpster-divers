const mongoose = require("mongoose");
const Stats = require('../models/Stats');
const Users = require('../models/Users');

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

const getData = (req, res) => {
  res.send("Unimplemented Function");
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

module.exports = {
  addSessionStats,
  getData,
  getRemaining
};
