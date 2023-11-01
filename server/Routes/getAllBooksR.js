import express from 'express'
import getAllInfo from '../controllers/selectAllBooksC.js'


let selectAllRoute = express.Router()

selectAllRoute.get('/getALLBooks',getAllInfo)

export default selectAllRoute