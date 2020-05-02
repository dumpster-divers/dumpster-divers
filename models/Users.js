const mongoose = require("mongoose");

// Schema for api/users
const userSchema = new mongoose.Schema({
  id: String,
  username: {
    type: String,
    index: true
  },
  name: String,
  dateJoined: Date,
  processedTotal: Number,
  processedRecord: Number
});

module.exports = mongoose.model("Users", userSchema, "Users");
