import connectionInformation from "../schema/database.config.js";

let getAllBooks =(req,res)=>{
    let getbooks = `SELECT * FROM booktable`
    connectionInformation.query(getbooks,(err,data)=>{
         if(err){
            console.log(err.message)
         }else{
            res.send(data)
         }
    })
}

export default getAllBooks