const mongoose = require("mongoose");

// Schema for api/users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  name: String,
  dateJoined: Date,
  processedTotal: Number, // All time total trash processed
  processedRecord: Number, // Record for most trash processed in one session
  email: String
});

module.exports = mongoose.model("Users", userSchema, "Users");
