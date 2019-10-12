const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const leaderBoardRoute = require("./routes/leaderboard");
const authentication = require("./routes/signup");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 5000;
mongoose.connect("mongodb+srv://JulianG36:Mariano14@buisnesscardcluster-cqffw.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true, useFindAndModify: false,  useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

if(app.get("env") === "development") {
    app.use(morgan("tiny"));
    console.log("Morgan enabled");
}  





app.listen(port, () => {console.log(`Listening on port ${port}....`)});
//app.use(cors({credentials:true, origin:"http://localhost:5000/"}));
// const mainRoute = require("./routes/mainRoute")(passport);
// const servicesRoute = require("./routes/servicesRoute")(passport);

app.get("/", function(req, res){
    res.send({item:1});
})
app.use("/leaderBoard", leaderBoardRoute);
app.use("/authentication", authentication);
// app.get("/leaderBoard/allfriends", function(req, res){
//     res.send({item:1});
//     const {id} = req.body;
//     leaderBoardServices.getUsers(id, function(err, data){
//         if(err){
//             res.status(400).send(err);
//         }else{
//             res.status(200).send(data);
//         }
//     });

// })






