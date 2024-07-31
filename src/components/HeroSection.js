// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HeroSection.css'; // Add styles as needed

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Your gateway to understanding who I am and what I do.</p>
        <button className="hero-button">
          <Link to="/about" className="button-link">Learn More</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
