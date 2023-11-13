import React, { useState } from 'react'
import {axiosInstance} from '../../utility/axios.js'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './FileUpload.css'
function FileUpload() {
  const [data, setData] = useState({
    user_id:"",
    book_description:"",
    book_author :"",
    book_file:""
  })
  const [response, setResponse] = useState()

let submitter = (e)=>{
 e.preventDefault()
 let linkToSend = `${axiosInstance.defaults.baseURL}/user/postBooks`
  axios({
    method :"POST",
    url:linkToSend,
    data:data,
    headers: {"Content-Type": "multipart/form-data"}
  }).then(response=>setResponse(response.data))

}

let handleChange = (e) => {
  switch (e.target.name) {
    case 'book_author':
      setData((pre) => ({ ...pre, book_author: e.target.value }));
      break;
    case 'book_description':
      setData((pre) => ({ ...pre, book_description: e.target.value }));
      break;
    case 'book_file':
      setData((pre) => ({ ...pre, book_file: e.target.files[0] }));
      break;
    default:
      break;
  }
}

if(response){

  return <div>
            <h1>{response.message}</h1>
            <Link to="/home">Click here For Home page</Link>
          </div>
        
}else{
  return (
    <div>
      <h1>
        file upload 
      </h1>
      <form onSubmit={submitter}>
        <input type="text"name='book_author' onChange={handleChange} placeholder='Book Author' />
        <input type="text" name='book_description' onChange={handleChange}  placeholder='Book Description'/>
        <input type="file" onChange={handleChange} accept='application/pdf' name='book_file'/>
        <button type='submit'>upload</button>
      </form>
      <br />
      <Link to='/home'> Home Page</Link>
    </div>
  )
}
  
}

export default FileUpload