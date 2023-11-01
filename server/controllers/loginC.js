import connectionInformation from '../schema/database.config.js'


let login = (req,res)=>{
     const {passed_user_email, passed_user_password}= req.body
      if(!passed_user_email || !passed_user_password){
        res.json('all ....')
      }else{
            let emailAndPassChe = `SELECT user_email,user_password from registrations  WHERE user_email = '${passed_user_email}'`
             connectionInformation.query(emailAndPassChe, (err,data,field)=>{
                     if(err){
                        console.log(err.message)
                     }else{
                        if(data){
                            let result = data.find((userDataForEmail)=>{
                                return userDataForEmail.user_email === passed_user_email
                            })
                            if(result){
                                  let result2 = data.find((userDataForPassword)=>{
                                      return userDataForPassword.user_password === passed_user_password
                                  })
                                  console.log(result2)
                                  if(result2){
                                    res.json({
                                        message:'user logged in successfully',
                                        route :'/dashboard'
                                    })
                                  }else{
                                    res.json({
                                        message:'password not correct ',
                                        route :'/login'
                                    })
                                  }
                            }else{
                                res.json({
                                    message : 'email not registered',
                                    route :'/signup'
                                })
                        }
                        }
                     }
             })

      }
}


export default login