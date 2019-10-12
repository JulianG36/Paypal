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


function getFirstName(_id, callback){
    user.find(_id, (err, data) =>{
        const{firstname, lastname} = data;
        const foo = {
            firstname, 
            lastname,
        }
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(err, foo);
        }

    })
}

function getFirstName(_id, callback){
    user.find(_id, (err, data) =>{
        const{finance} = data;
        const foo = {
            finance,
        }
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(err, foo);
        }

    })
}


function login(email, password, callback) {
   user.findOne({email},(err, user) => {
        if (password === user.password) {
            callback(err, user._id);
        } else {
            console.log(err);
            callback(err);
        }    
        callback(err);
    })
}
function signUp(body, callback){
    const {email} = body;
    user.findOne({email},(err, user) => {
        if(user){
            return "User Already Exists";
        }else{
            const newUser = new user();
            newUser.firstname = body.firstname;
            newUser.lastname = body.lastname;
            newUser.email = body.email;
            newUser.password = body.password;
            newUser.save(function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("saved");
                }
            })
        }
    })
}


module.exports.signUp = signUp;
module.exports.getUsers = getUsers;