const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/moviesdb";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongoDB database");
    })
}

module.exports = connectToMongo;