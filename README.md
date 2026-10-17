# Bookstore Inventory Management System

A REST API for managing bookstore inventory using Node.js, Express.js, MongoDB, and Mongoose.

## Features

- Add a new book to the inventory
- Retrieve all books
- Retrieve a book by ISBN
- Update book details
- Delete a book by ISBN
- Validate book data using a Mongoose schema

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Installation

1. Clone this repository.
2. Install the dependencies:

   `npm install`

3. Ensure MongoDB is running locally.
4. Start the server:

   `node server.js`

The server runs on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/books` | Add a book |
| GET | `/api/books` | Get all books |
| GET | `/api/books/:isbn` | Get a book by ISBN |
| PUT | `/api/books/:isbn` | Update a book |
| DELETE | `/api/books/:isbn` | Delete a book |

## Example Book JSON

```json
{
  "title": "Wings of Fire",
  "author": "A. P. J. Abdul Kalam",
  "isbn": "9788173711466",
  "price": 250,
  "stock": 10,
  "genre": ["Autobiography"],
  "publishedYear": 1999
}
```
