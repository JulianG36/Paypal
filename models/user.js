const mongoose = require("mongoose");
const {friends} = require("../models/friends");
const {finance} = require("../models/finance");

const user = mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    friends: friends,
    finance: finance,

})

module.exports.user = user;
