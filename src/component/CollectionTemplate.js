import {React, useState, useEffect} from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import './CollectionTemplate.css'
import { useNavigate } from 'react-router-dom'
const CollectionTemplate = () => {
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

    useEffect(() => {
      axios.get('http://localhost:5555/books')
            .then((response) => {
              setBooks(response.data.data);
            })
            .catch((error) => {
              console.log(error)
            })
    }, [])

  
  
  return (
    <div className = 'collection_container'>
     
    <div className = 'list'>
        <table>

          <thead>
            <tr>
              <th> # </th>
              <th> Title </th>
              <th> Author </th>
              <th> PublishYear</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key = {book._id} className='book'>
                <td  data-cell = 'No' className='index'> {index + 1} </td>
                <td data-cell = 'Title' className='bookTitle'> {book.title}</td>
                <td data-cell = 'Author' className='bookAuthor'> {book.author} </td>
                <td data-cell = 'Publish Year' className='bookPublishYear'> {book.publishYear} </td>
                <td className = 'delete'><Link to = {`/books/delete/${book._id}`}>  Delete 
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     </div>
    
  
    </div>
  )
}

export default CollectionTemplate
