import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => handleScroll('home')}>Home</button></li>
        <li><button onClick={() => handleScroll('about')}>About</button></li>
        <li><button onClick={() => handleScroll('portfolio')}>Portfolio</button></li>
        <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
