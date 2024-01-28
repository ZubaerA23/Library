import {useState , React} from 'react'
import './DeleteBookTemp.css'
import axios from 'axios'
import {useNavigate, useParams } from 'react-router-dom'
function DeleteBookTemp() {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleDeletion = () =>{
        axios.delete(`http://localhost:5555/books/${id}`)
        .then(() => {
            alert('deleted')
            navigate('/Collection')
        })
        .catch((error) => {
            console.log(error);
        })
    }


    const goBack = () =>{
      navigate("/Collection")
    }

  return (
    <div className = "delete_">
    <p> Are you sure you want to delete ? </p>
    <div className = "delete_options">
      <button onClick = {goBack}> No , Go Back </button>
      <button onClick={handleDeletion}> Yes , Delete </button>
      </div>
    </div>
  )
}

export default DeleteBookTemp
