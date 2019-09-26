const { Router } =  require('express');
const router = Router();
const { unlink } = require('fs-extra');
const path = require('path');

const Book = require('../models/book.js');

router.get('/', async (req,res) => {
	const books = await Book.find();
	res.json(books);
});

router.post('/', async(req,res) => {
	const { title,author,isbn } = req.body;
	const imgPath = '/upload/' + req.file.filename;
	const newBook = await new Book({title,author,isbn,imgPath});
	await newBook.save();
	res.json({"message": "Book Save"});
});

router.delete('/:id', async(req,res) => {
	const book = await Book.findByIdAndDelete(req.params.id);
	unlink(path.resolve('./backend/public' + book.imgPath))
	res.json({"message": "Book Delete"});
})

module.exports = router;