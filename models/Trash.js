const mongoose = require("mongoose");

// Schema for api/users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  recyclable: Boolean
});

module.exports = mongoose.model("Trash", userSchema, "Trash");
