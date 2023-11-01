import connectionInformation from '../schema/database.config.js'

let register = (req,res)=>{
   
    const {user_first_name,user_last_name,user_email,user_password} = req.body
     
    
     
    let insertInfo = `INSERT INTO registrations (user_first_name,user_last_name,user_email,user_password) VALUES('${user_first_name}','${user_last_name}','${user_email}','${user_password}')`
    
    connectionInformation.query(insertInfo,(err,data,field)=>{
         if(err){
            // console.log(err.message)
            res.send(err)
         }else{
            res.send('registered successfully')
         }
    })

}

export default register