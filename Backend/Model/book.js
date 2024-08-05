const mongoose = require('mongoose')
require('../ConnectionConfig/connect')

const bookSchema = new mongoose.Schema({
    "title": String,
    "author": String,
    "isbn": String,
    "publicationDate": Date,
    "publisher": String,
    "price": Number,
})

module.exports = mongoose.model("book",bookSchema)
