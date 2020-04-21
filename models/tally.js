const mongoose = require('mongoose');

// Schema for api/trash
const tallySchema = new mongoose.Schema({
    globalRemaining: {
        type: Number,
        required: true
    }
});

// Export
const Tally = mongoose.model("tally", tallySchema, "tally");
module.exports = Tally;
