import React from 'react';
import PortCard from '../components/PortCards';
import './Projects.css';


import snakeGameImage from '../components/snake-game-image.png';
import songSiftRichImage from '../components/song-sift-rich-image.png';
import songSiftGuiImage from '../components/song-sift-gui-image.png';
import hagridChatbotImage from '../components/hagrid-chatbot-image.png';
import hagridVaImage from '../components/hagrid-va-image.png';


const projects = [
  {
    title: 'Snake Game',
    description: 'A classic Snake Game built with JavaScript.',
    link: 'https://github.com/ALmoSTGoD249/Snake-Game',
    image: snakeGameImage,
  },
  {
    title: 'SongSift-Rich',
    description: 'A rich-featured music recommendation application.',
    link: 'https://github.com/ALmoSTGoD249/SongSift-Rich',
    image: songSiftRichImage,
  },
  {
    title: 'SongSift-GUI',
    description: 'A GUI-based music recommendation application.',
    link: 'https://github.com/ALmoSTGoD249/SongSift-GUI',
    image: songSiftGuiImage,
  },
  {
    title: 'Hagrid-Chatbot',
    description: 'An AI chatbot built using OpenAI’s APIs.',
    link: 'https://github.com/ALmoSTGoD249/Hagrid-Chatbot',
    image: hagridChatbotImage,
  },
  {
    title: 'Hagrid-VA',
    description: 'Voice Assistant built with advanced features.',
    link: 'https://github.com/ALmoSTGoD249/Hagrid-VA',
    image: hagridVaImage,
  },
];

function Projects() {
  return (
    <div className="projects">
      <header>
        <h1>My Projects</h1>
      </header>
      <div className="card-container">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <PortCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
