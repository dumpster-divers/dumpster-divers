const mongoose = require('mongoose');

// Schema for api/trash
const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  dateJoined: Date,
  processedTotal: Number
});
module.exports = mongoose.model("Users", userSchema, "Users");

