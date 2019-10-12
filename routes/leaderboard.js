const express = require("express");
const router = express.Router();
const leaderBoardServices = require("../models/user");

module.exports = function(){
    router.get('/allfriends', function(req, res){
        const {id} = req.body;
        // leaderBoardServices.getUsers(id, function(err, data){
        //     if(err){
        //         res.status(400).send(err);
        //     }else{
        //         res.status(200).send(data);
        //     }
        // });
        res.status(200).send({item:1});

    })
}