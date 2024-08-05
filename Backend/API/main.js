const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('../ConnectionConfig/connect')


const bookRouter = require('../Router/bookRouter')
const ex = express();
ex.use(express.json());
ex.use(cors())

ex.use("/",bookRouter)

ex.listen(4000,function(){
    console.log("server is running")
})