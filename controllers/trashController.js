const mongoose = require("mongoose");
const Stats = require('../models/Stats');

// trash/increment-user-count: decrase the global count and increase user's total processed
const postIncrease = async (req, res) => {
  // Get current count
  const trashCount = await Stats.find();
  let remaining = trashCount[0].globalRemaining;

  // Don't let count fall below 0
  remaining = Math.max(0, remaining - req.body.count);

  // Update count
  Stats.updateOne({}, { globalRemaining: parseInt(remaining) }, {}, err => {
    if (err) {
      console.log(err);
    }
  });

  return res.send();
};

const add = (req, res) => {
  res.send("Unimplemented Function");
};
const getData = (req, res) => {
  res.send("Unimplemented Function");
};
const deleteTrash = (req, res) => {
  res.send("Unimplemented Function");
};

module.exports = {
  postIncrease,
  add,
  getData,
  deleteTrash
};
