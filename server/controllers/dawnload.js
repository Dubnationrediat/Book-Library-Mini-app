import fs from 'fs'
import path from 'path'

let Dawnloader = (req,res)=>{
    let reqParams = req.params.FileName
     fs.readFile(`Resources/${reqParams}`,(err,data)=>{
        if(err){
            console.log(err.message);
            res.status(404).send('File not found')
        }else{
            res.send(data)
        }
     })
}

 export default  Dawnloader