const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('../ConnectionConfig/connect')

const personRouter = require('../Router/personRouter')
const ex = express();
ex.use(express.json());
ex.use(cors())
ex.use("/",personRouter)

ex.listen(4000,function(){
    console.log("server is running")
})