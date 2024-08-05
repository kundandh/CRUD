const bookModel = require('../Model/book')

const addBook = async(req,res)=>{
    try{
        const book = new bookModel(req.body);
        const result = await book.save();
        res.send(result);
    }
    catch(error){
        console.log(error)
    }
}

const getBook = async(req,res)=>{
    try{
        const book = await bookModel.find();
        res.json(book);

    }
    catch(error)
    {
        console.log(error);
    }
}

const getBookById = async (req, res) => {
    try {
        const bookId = req.params.id; 
        const book = await bookModel.findById(bookId);
        
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteBook = async(req, res) => {
    try {
        const bookId = req.params.id;
        const result = await bookModel.findByIdAndDelete(bookId);
        if (!result) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.json({ message: 'Book deleted successfully' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updatedFields = req.body;
        const result = await bookModel.findByIdAndUpdate(bookId, updatedFields, { new: true });
        if (!result) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({ message: 'Book updated successfully', book: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = {
    addBook,
    getBook,
    deleteBook,
    updateBook,
    getBookById
};