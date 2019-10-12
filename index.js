const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const morgan = require("morgan");

const port = process.env.PORT || 5000;
mongoose.connect("mongodb+srv://JulianG36:Mariano14@buisnesscardcluster-cqffw.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true, useFindAndModify: false,  useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next){
    console.log(req.headers);
    next();
});
app.use(express.json());

if(app.get("env") === "development") {
    app.use(morgan("tiny"));
    console.log("Morgan enabled");
}  
app.on('error', function(err){
    console.error('on error handler');
    console.error(err);
});
app.on('clientError', function(err){
    console.error('on clientError handler');
    console.error(err);
});
process.on('uncaughtException', function(err) {
    console.error('process.on handler');
    console.error(err);
});
app.listen(port, () => {console.log(`Listening on port ${port}....`)});
// const mainRoute = require("./routes/mainRoute")(passport);
// const servicesRoute = require("./routes/servicesRoute")(passport);
app.use(express.static(path.join(__dirname, "client/build")));
//app.use("/home", mainRoute);





