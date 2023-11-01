import Dawnloader from '../controllers/dawnload.js'
import express from 'express'



let PdfSender = express.Router()
PdfSender.get('/Resources/:FileName',Dawnloader)


export default PdfSender