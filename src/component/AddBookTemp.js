import {React, useState} from 'react'
import axios from 'axios'
import './AddBookTemp.css'
import Navbar from './Navbar';
function AddBookTemp() {
    const [books, setBooks] = useState([]);
  const [title , setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear , setPublishYear] = useState('')
  
  const handleSaveBook = (e) => {
    console.log('reached here')
    e.preventDefault();
    const data = {
      title,
      author,
      publishYear,
    };
    axios.post('http://localhost:5555/books' , data)
    .then(()=>{
      alert('book added')
     
    })
    .catch((error) => {
      console.log('didnt add')
    })
  };
  return (
    <div className = 'temp'>
    <Navbar/>
      <div className='temp_adjuster'>
    <div className='Book_Container'>

      <form>
        <h2> Add Book Info</h2>
        <div className='inputBox'>
            <input value = {title} onChange = {(e) => setTitle(e.target.value)} type = 'text' required = 'required'></input>
            <span> Book Title </span>
        </div>
        <div className='inputBox'>
            <input value = {author} onChange ={(e) => setAuthor(e.target.value)} type = 'text' required = 'required'></input>
            <span> Author </span>
        </div>
        <div className='inputBox'>
            <input value = {publishYear} onChange = {(e) => setPublishYear(e.target.value)} type = 'text' required = 'required'></input>
            <span> Published Year </span>
        </div>
        <button onClick = {handleSaveBook} type = "submit" value = 'Login'> Add </button>
      </form>

      
    </div>
    </div>
    </div>
    
  )
}

export default AddBookTemp
