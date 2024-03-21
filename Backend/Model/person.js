const mongoose = require('mongoose')
require('../ConnectionConfig/connect')

const personSchema = new mongoose.Schema({
    "firstName" : String,
    "lastName" : String,
    "age" : Number,
    "dateOfBirth":Date,
    "jobTitle": String,
    "voterid" : String,
})

module.exports = mongoose.model("person",personSchema)
