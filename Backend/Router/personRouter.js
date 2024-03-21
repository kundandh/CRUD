const {addPerson} = require('../Controller/personController')

const express = require('express');
const person = require('../Model/person');
const personRouter = express.Router();

personRouter.post('/addPerson',addPerson);

module.exports = personRouter;