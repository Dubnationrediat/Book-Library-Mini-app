import express from 'express'
import insertBooks from '../controllers/bookInsertC.js'
import multerBook from '../middleware/forBooks.js'
import getAllBooks from '../controllers/getAllBooks.js'
let insertBooksRoute = express.Router()

insertBooksRoute.post('/postBooks',multerBook.single('book_file'),insertBooks)
insertBooksRoute.get('/getAllBooks',getAllBooks)

export default insertBooksRoute