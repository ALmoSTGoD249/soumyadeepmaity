import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    navigate('/'); // Use navigate for redirection
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <h1>© 2024 Soumyadeep Maity</h1>
      </div>
      {/* Add your nav elements here */}
    </header>
  );
};

export default Header;
