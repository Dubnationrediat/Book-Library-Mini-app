import {registration,bookTable} from '../schema/table.js'
import connectionInformation from '../schema/database.config.js'

let tableCreator = (req,res)=>{
     connectionInformation.query(registration,(err,result)=>{
        if(err){
            console.log(err.message)
        }else{
            connectionInformation.query(bookTable,(err,result)=>{
                if(err){
                    console.log(err.message)
                }else{
                    res.send('all tables created successfully')
                }
            })
        }
     })
}

export default tableCreator