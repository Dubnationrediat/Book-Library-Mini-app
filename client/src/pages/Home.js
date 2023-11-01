import React, { useEffect, useState } from 'react'
import {axiosInstance} from '../utility/axios.js'
import axios from 'axios'
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
console.log(books)
  return (
    <div>
<h1>home page</h1>
   
   <div>
    {
        books?.map((bookData,i)=>{
            let display =(
                
                 <div key={i}>
                 <div>book author : {bookData.book_author}</div>
                 <div>book description : {bookData.book_description}</div>
                 <div>book title : {bookData.book_title}</div>
                 <a href={`${axiosInstance.defaults.baseURL}/user/Resources/${bookData.book_title}`}>{bookData.book_title}</a>
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