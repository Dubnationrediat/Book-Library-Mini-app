import express from 'express'
import login from "../controllers/loginC.js";


let loginRoute = express.Router()

loginRoute.post('/login',login)

export default loginRoute