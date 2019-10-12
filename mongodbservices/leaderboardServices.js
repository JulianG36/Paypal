const {user} = require("../models/user");

function getUsers(_id, callback){
    user.find(_id, (err, data) =>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(err, data);
        }

    })
}

module.exports.getUsers = getUsers;