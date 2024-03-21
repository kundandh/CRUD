const mongoose = require("mongoose")

const connect = mongoose.connect("mongodb://localhost:27017/people")

if(connect){
    console.log("Mongo is Connected")
}else{
    console.log("Problem in connection.")
}