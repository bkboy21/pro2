const mongoose = require("mongoose");

const gSchema = new mongoose.Schema({
    title: { type: String, required: true }
});

const gBank = mongoose.model('gBank', gSchema);

module.exports = gBank;