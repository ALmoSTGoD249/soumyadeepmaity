import React from 'react';
import './PortfolioSection.css';

import snakeGameImage from './snake-game-image.png';
import songSiftRichImage from './song-sift-rich-image.png';
import songSiftGuiImage from './song-sift-gui-image.png';
import hagridChatbotImage from './hagrid-chatbot-image.png';
import hagridVaImage from './hagrid-va-image.png';
import portfolio from './portfolio.png';
import kunalportfolio from './kunalportfolio.png';
import cow from './cowweb.png';

const projects = [
  {
    name: 'Snake Game',
    description: 'A classic Snake Game built with PyGames.',
    link: 'https://github.com/ALmoSTGoD249/Snake-Game',
    image: snakeGameImage,
  },
  {
    name: 'SongSift-Rich',
    description: 'A rich-featured music recommendation application.',
    link: 'https://github.com/ALmoSTGoD249/SongSift-Rich',
    image: songSiftRichImage,
  },
  {
    name: 'SongSift-GUI',
    description: 'A GUI-based music recommendation application.',
    link: 'https://github.com/ALmoSTGoD249/SongSift-GUI',
    image: songSiftGuiImage,
  },
  {
    name: 'Hagrid-Chatbot',
    description: 'An AI chatbot built using OpenAI’s APIs.',
    link: 'https://github.com/ALmoSTGoD249/Hagrid-Chatbot',
    image: hagridChatbotImage,
  },
  {
    name: 'Hagrid-VA',
    description: 'Voice Assistant built with advanced features.',
    link: 'https://github.com/ALmoSTGoD249/Hagrid-VA',
    image: hagridVaImage,
  },
  {
    name: 'My Portfolio',
    description: 'Using React.js.',
    link: 'https://github.com/ALmoSTGoD249',
    image: portfolio,
  },
  {
    name: 'HTML Project',
    description: 'Advanced HTML, CSS and JavaScript',
    link: 'https://kunaldutta116.github.io/',
    image: kunalportfolio,
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <h2>My Work</h2>
      <div className="portfolio-items">
        {projects.map((project) => (
          <div className="portfolio-item" key={project.name}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src={project.image} alt={project.name} className="portfolio-image" />
              <div className="portfolio-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
