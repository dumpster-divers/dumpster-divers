const mongoose = require('mongoose');

// Schema for api/trash
const trashSchema = new mongoose.Schema({
    globalRemaining: {
        type: Number,
        required: true
    }
});

// Export
const Trash = mongoose.model("trash", trashSchema, "trash");
module.exports = Trash;
