const express = require("express");
const router = express.Router();
const leaderBoardServices = require("../mongodbservices/leaderboardServices");


router.get("/signup/", function(req, res){
    const {body} = req;
    
    leaderBoardServices.signUp(body, function(err){
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send("Created User");
        }
    });

});
router.get("/login/", function(req, res){
    const {body} = req;
    leaderBoardServices.login(body, function(err, id){
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(id)
        }
    })
})

module.exports = router;
