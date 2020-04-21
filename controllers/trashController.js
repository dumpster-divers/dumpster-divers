const mongoose = require("mongoose")

const Tally = mongoose.model("tally");

// trash/global-count: get current trash count
const getRemaining = async (req, res) => {
    try {
        const trashCount = await Tally.find();
        return res.send(trashCount);
    } catch (err) {
        res.status(400);
        console.log(err)
        return res.send("Database query failed");
    }
}

// trash/increment-user-count: decrase the global count and increase user's total processed
const postIncrease = async (req, res) => {
    // Get current count
    const trashCount = await Tally.find();
    let remaining = trashCount[0].globalRemaining;
    
    // Don't let count fall below 0
    remaining = Math.max(0, remaining-req.body.count)
    
    // Update count
    Tally.updateOne({}, 
        {globalRemaining: parseInt(remaining)},
        {},
        (err) => {
            if (err) { console.log(err); }
        }
    );
    
    return res.send()
}

module.exports = {
    getRemaining,
    postIncrease
}