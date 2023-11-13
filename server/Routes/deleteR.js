import express from 'express'
import deleteBooks from '../Resources/deleteBooks.js'

let deleteB = express.Router()

deleteB.delete('/delete/:book_id',deleteBooks)

export default deleteB
