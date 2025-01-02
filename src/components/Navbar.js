import React, { useState } from 'react';
import '../styles/App.css';

const Navbar = ({ setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <button className="hamburger-button" onClick={handleHamburgerClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => handleNavClick('home')}>Home</button></li>
          <li><button onClick={() => handleNavClick('portfolio')}>Projects</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
