import connectionInformation from "../schema/database.config.js";

let insertBooks = (req,res)=>{
    if(req.file){
        let pdfFileName = req.file.filename;
        let pdfFilePath = req.file.path
        const {book_description,book_author} = req.body
        
        let insertBooks = `INSERT INTO bookTable (user_id,book_link,book_description,book_author,book_title) VALUES (?)`;

       let value =[0,pdfFilePath,book_description,book_author,pdfFileName]
       
        connectionInformation.query(insertBooks,[value],(err,data,field)=>{
            if(err){
                console.log(err.message)
            }else{
                res.json({
                    message : 'book information added successfully'
                })
            }
        })
    }
  



}

export default insertBooks