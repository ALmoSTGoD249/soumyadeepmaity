import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact">
      <h2>Lets Connect</h2>
      <div className="contact-info">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/soumyadeep-maity-3913101b4/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/ALmoSTGoD249" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="tel:+919830218177">
              <i className="fas fa-phone"></i> +91 98302 18177
            </a>
          </li>
          <li>
            <a href="mailto:soumadeepmaity2@gmail.com">
              <i className="fas fa-envelope"></i> soumadeepmaity2@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/almostgod7/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="https://x.com/Soumyad78115753" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x"></i> X (formerly Twitter)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
