const mongoose = require('mongoose');// Setup schema

const trashSchema = new mongoose.Schema({
    number: Number
});

const Trash = mongoose.model("trash", trashSchema, "trash");
module.exports = Trash;
