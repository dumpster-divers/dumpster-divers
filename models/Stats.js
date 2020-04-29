const mongoose = require('mongoose');

// Schema for api/trash
const statsSchema = new mongoose.Schema({
    globalRemaining: {
        type: Number,
        required: true,
        default: 100000
    }
});

// Export
module.exports =  mongoose.model("Stats", statsSchema, "Stats");
