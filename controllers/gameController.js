const mongoose = require("mongoose");
const Stats = require('../models/Stats');
const Users = require('../models/Users');

// game/add-session-stats: decrase the global count and increase user's total processed
const addSessionStats = async (req, res) => {
  // Must pass in a count
  if (req.body.count === undefined) res.status(400).send('No count provided');

  // Get current count
  const trashCount = await Stats.findOne();
  let remaining = trashCount.globalRemaining;

  // Don't let count fall below 0
  remaining = Math.max(0, remaining - req.body.count);
  console.log(remaining);
  // Decrease global count count
  Stats.updateOne({}, { globalRemaining: parseInt(remaining) }, {}, err => {
    if (err) console.log(err);
  });
 
  // Increment user count  (optional)
  if (req.body.username !== undefined) {
    const user = await Users.find()

    // Update procesesdTotal and get current record
    const currentRecord = Users.findOneAndUpdate(
      {username: req.body.username},
      {$inc: {processedTotal: req.body.count}}, 
      err => {if (err) console.log(err);}
    ).processedRecord

    // Update record if higher
    if (req.body.count > currentRecord) {
      Users.findOneAndUpdate(
        {username: req.body.username},
        {processedRecord: req.body.count},
        err => {if (err) console.log(err);}
      );
     }
  }

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
