/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import DeleteBook from '../pages/DeleteBook';
const Navbar = () => {
    const navigate = useNavigate();
    const handleCollections = () =>{
      navigate('/Collection');
    }

    const homeScreen = () =>{
      navigate('/')
    }
    

    const addBook = () =>{
      navigate("/AddBook");
    }

    const deleteBook = () =>{
      navigate('/DeleteBook')
    }

    
  return (
   
<nav class="navbar">
    <ul class="navbar-nav">
      <li onClick={homeScreen} class="logo">
        <a href="#" class="nav-link">
          <span class="link-text logo-text">ZALib</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li onClick = {handleCollections} class="nav-item">
        <a href="#" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 448 512">
        <path  fill="currentColor"
         class="fa-secondary"
         d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>

        </svg>
          <span class="link-text"> Books </span>
        </a>
      </li>

      <li onClick = {addBook} class="nav-item">
        <a href="#" class="nav-link">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path  fill="currentColor"
         class="fa-secondary" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
</svg>

          <span class="link-text">Add Book</span>
        </a>
      </li>

    


   
    </ul>
  </nav>

  )
}

export default Navbar
