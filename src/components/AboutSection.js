import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-me-container pop-in">
      <h1>ABOUT ME</h1>
      <p>
        I'm a passionate web developer based in Kolkata, India, with a keen interest in cutting-edge technology and design. I’ve worked on various projects that showcase my skills and creativity.

        For a deeper dive into my work, visit my <a href="https://github.com/ALmoSTGoD249" target="_blank" rel="noopener noreferrer">GitHub</a>. There, you'll find repositories showcasing my latest projects, including web development work, AI chatbot projects, and other programming endeavors. My GitHub is a testament to my commitment to continuous learning and innovation in the tech space.

        Feel free to explore my GitHub to see what I’m up to!
      </p>
      <a href="/Soumyadeep Maity-3.pdf" download className="download-cv-button">download CV</a>
    </div>
  );
};

export default AboutSection;
