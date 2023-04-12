import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from "./pages/AboutMe"
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Pikachu from '../images/pikachu-run.gif'

import "../styles/PikachuScroll.css"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About Me');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if(currentPage === 'About Me'){
      return <><AboutMe /></>
    }
    if(currentPage === 'Portfolio'){
      return <><Portfolio/></>
    }
    if(currentPage === "Contact Me"){
      return <><ContactMe /></>
    }
    if(currentPage === "Resume"){
      return <><Resume /></>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div class="scroll-container">
        <div class="sliding-background"></div>
      </div>
      <h1 class="hailey-title">Hailey D. Francis</h1>
      <img src={Pikachu} class="pikachu" alt="running Pikachu"></img>
      <header class="header-container">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      
      <main>
        {renderPage()}
      </main>
    </>
    
  );
}
