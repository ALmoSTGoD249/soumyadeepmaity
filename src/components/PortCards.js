import React from 'react';
import './PortCards.css'; 

const PortCard = ({ title, description, image, link }) => {
  return (
    <div className="port-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="port-image" />
        <div className="port-content">
          <h2 className="port-title">{title}</h2>
          <p className="port-description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default PortCard;
