import express from 'express'
import register from '../controllers/registerC.js'

let registerRoute = express.Router()

registerRoute.post('/register',register)

export default registerRoute