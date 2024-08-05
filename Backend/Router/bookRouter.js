const {addBook,getBook,updateBook,deleteBook,getBookById} = require('../Controller/bookController')

const express = require('express');
const book = require('../Model/book');
const bookRouter = express.Router();

bookRouter.post('/book',addBook);
bookRouter.get('/book',getBook);
bookRouter.get('/book/:id',getBookById);
bookRouter.put('/book/:id',updateBook);
bookRouter.delete('/book/:id',deleteBook);

module.exports = bookRouter;