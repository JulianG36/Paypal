const {HackathonUser} = require("../models/user");

function getUsers(_id, callback){
    HackathonUser.find(_id, (err, data) =>{
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(err, data);
        }

    })
}


function getFirstName(_id, callback){
    HackathonUser.find(_id, (err, data) =>{
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
    HackathonUser.find(_id, (err, data) =>{
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


function login(body, callback) {
    const {email, password} = body;
   HackathonUser.findOne({"email": email},(err, user) => {
       if(!user){
            callback("User does not exist");
       }
        if (password === user.password) {
            callback(err, user._id);
        } else {
            console.log(err);
            callback(err);
        }    
    })
}
function signUp(body, callback){
    const {email} = body;
    
    HackathonUser.findOne({email},(err, user) => {
        if(user){
            callback("User Already exists");
        }else{
            console.log(body);
            const newUser = new HackathonUser();
            newUser.firstname = body.firstname;
            newUser.lastname = body.lastname;
            newUser.email = body.email;
            newUser.password = body.password;
            newUser.save(function(err){
                if(err){
                    callback(err);
                }else{
                    callback(false);
                }
            })
        }
    })
}


module.exports.login = login;
module.exports.signUp = signUp;
module.exports.getUsers = getUsers;