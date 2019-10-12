const mongoose = require("mongoose");
const {friends} = require("../models/friends");
const {finance} = require("../models/finance");
const model = mongoose.model;

const HackathonUser = mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    friends: friends,
    finance: finance,

})

module.exports.HackathonUser = model("HackathonUser",HackathonUser);;
