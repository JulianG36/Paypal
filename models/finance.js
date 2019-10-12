const mongoose = require("mongoose");

const finance = mongoose.Schema({
    perMonth: Number,
    percent: Number,
    amountSpent: Number,
})

module.exports.finance = finance;
