import express from 'express'
import connectionInformation from './schema/database.config.js'
import cors from 'cors'
import tableRoute from './Routes/tableCreateR.js'
import registerRoute from './Routes/registerR.js'
import loginRoute from './Routes/loginR.js'
import insertBooksRoute from './Routes/bookInsertR.js'
import selectAllRoute from './Routes/getAllBooksR.js'
import PdfSender from './Routes/dawnload.js'
import deleteR from './Routes/deleteR.js'



const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
// * main routes 

app.use('/admin',tableRoute)
app.use('/user',registerRoute)
app.use('/user',loginRoute)
app.use('/user',insertBooksRoute)
app.use('/user',selectAllRoute)
app.use('/user',PdfSender)
app.use('/user',deleteR)


function connectionCreator(){
     try {
        connectionInformation.connect((err)=>{
            if(err){
                console.log(err.message)
            }else{
                console.log('connection with database created successfully')
                app.listen(5000,()=>{
                    console.log('app is listening to port 5000')
                })
            }
        })
     } catch (error) {
         console.log(error.message)
     }
}

connectionCreator()