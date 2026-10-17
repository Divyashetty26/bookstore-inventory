
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./bookModel');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Get all books
app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new book
app.post('/api/books', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get one book by ISBN
app.get('/api/books/:isbn', async (req, res) => {
    try {
        const book = await Book.findOne({ isbn: req.params.isbn });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a book by ISBN
app.put('/api/books/:isbn', async (req, res) => {
    try {
        const book = await Book.findOneAndUpdate(
            { isbn: req.params.isbn },
            req.body,
            { new: true, runValidators: true }
        );
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a book by ISBN
app.delete('/api/books/:isbn', async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({
            isbn: req.params.isbn
        });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
