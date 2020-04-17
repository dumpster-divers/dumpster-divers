var mongoose = require('mongoose');// Setup schema
var tallySchema = mongoose.Schema({
    number: Number
});// Export Book model
var Trash = module.exports = mongoose.model('trashNumber', tallySchema);module.exports.get = function (callback, limit) {
    Trash.find(callback).limit(limit);
}