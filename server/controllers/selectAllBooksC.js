
import connectionInformation from "../schema/database.config.js";


let getAllInfo = (req,res)=>{
    let getAllInfoQuery = `SELECT * FROM bookTable`

    connectionInformation.query(getAllInfoQuery,(err,data,field)=>{
        if(err){
            console.log(err.message)
        }else{
            res.json({
                dataFromDB:data
            })
        }
    })
}

export default getAllInfo


