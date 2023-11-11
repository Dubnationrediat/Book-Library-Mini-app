import React, { useEffect, useState } from 'react'
import {axiosInstance} from '../../utility/axios.js'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
const [books, setBooks] = useState([])

 let getBooks = async ()=>{
     try {
      await  axios({
            method: "GET",
            url:`${axiosInstance.defaults.baseURL}/user/getAllBooks`
        }).then((data)=>{
            setBooks(data.data)
        })
       
     }catch(error){
        console.log(error.message)
     }
 }
useEffect(()=>{
    getBooks()
},[])


let toDelete = async (book_id)=>{
    let deleteBook = `${axiosInstance.defaults.baseURL}/user/delete/${book_id}`
   await axios({
     method:'DELETE',
     url:deleteBook
   })
   getBooks()
 }



  return (
    <div>
<h1>home page</h1>
<hr />
<h3 className='forBg'>
   <Link to="/upload">Click here for Book uploading</Link>
</h3>
<hr />
   <div>
    {
        books?.map((bookData,i)=>{
            let display =(
                
                 <div key={i}>
                 <div>book author : {bookData.book_author}</div>
                 <div>book description : {bookData.book_description}</div>
                 <div>book title : {bookData.book_title}</div>
                 <a href={`${axiosInstance.defaults.baseURL}/user/Resources/${bookData.book_title}`}>{bookData.book_title}</a>
                 <br></br>
                 <br></br>
                <button onClick={()=>toDelete(bookData.book_id)}>Delete Information</button>
                 <hr />
                 </div>
            )
            return display
        })
    }
   </div>
    </div>
  )
}

export default Home