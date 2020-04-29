const mongoose = require('mongoose');

// Schema for api/trash
const tallySchema = new mongoose.Schema({
    globalRemaining: {
        type: Number,
        required: true,
        default: 100000
    }
});

// Export
const Tally = mongoose.model("tally", tallySchema, "tally");
module.exports = Tally;
