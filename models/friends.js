const mongoose = require("mongoose");
const ObjectId= mongoose.Schema.Types.ObjectId;


const friends = mongoose.Schema({
    ids: [ObjectId],
    numberOfFriends: Number,
})

module.exports.friends = friends;
