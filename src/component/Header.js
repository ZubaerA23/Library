import React from 'react'
import './Header.css'
import { Link , useNavigate } from 'react-router-dom'
import Navbar from './Navbar';


const Header = () => {

  const navigate = useNavigate();
  const handleCollections = () =>{
    navigate('/Collection');
  }
  return (
    
  
    <div className = 'middle_part'>
      <h1>  Wonderful World <span> of Reading </span></h1>
      
      <button> View Collections </button>
    </div>
    
    
  )
}

export default Header
