// Will eventually use this to query DB
const mongoose = require("mongoose")

const Trash = mongoose.model("trash");

const getTest = async (req, res) => {
    res.json({"Yellow": "test"});
}

const getTally = async (req, res) => {
    try {
        const allTrash = await Trash.find();
        return res.send(allTrash);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
}

module.exports = {
    getTest,
    getTally
}

