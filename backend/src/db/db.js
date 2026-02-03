import mongoose from "mongoose";

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database connect successfully")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB;