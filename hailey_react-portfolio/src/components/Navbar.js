import React from 'react'

import '../styles/Header.css';

export default function Navbar({currentPage, handlePageChange}) {
  return (
      <nav class="navbar-container">
            <ul class="navbar-style">
                <li><a href="#About-Me" 
                onClick={() => handlePageChange('About Me')}
                className={(currentPage === "About Me") ? "nav-link-active" : "nav-link"}
                >About Me</a></li>
                
                <li><a href="#Portfolio"
                onClick={()=> handlePageChange('Portfolio')}
                className={(currentPage === "Portfolio") ? "nav-link-active" : "nav-link"}
                >Portfolio</a></li>

                <li><a href="#Contact-Me"
                onClick={()=> handlePageChange('Contact Me')}
                className={(currentPage === 'Contact Me') ? "nav-link-active" : "nav-link"}
                >Contact Me</a></li>

                <li><a href="#Resume"
                onClick={()=> handlePageChange('Resume')}
                className={(currentPage === 'Resume') ? "nav-link-active" : "nav-link"}
                >Resume</a></li>
            </ul>
        </nav>
  )
}
