import React, { useEffect, useState } from 'react';
import './IntroSection.css';


const IntroSection = () => {
  const texts = [
    "Soumyadeep Maity . . .",
    "A Web Developer . . .",
    "A Software Engineer . . .",
    "An Artist . . .",
    "BATMAN . . ."
  ];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
          setCurrentText(currentText.slice(0, charIndex - 1));
        } else {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      } else {
        if (charIndex < texts[index].length) {
          setCharIndex(charIndex + 1);
          setCurrentText(currentText + texts[index].charAt(charIndex));
        } else {
          setTimeout(() => setIsDeleting(true), 2500); // Increased pause duration
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100; // Adjusted typing speed
    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, currentText, index, texts]);

  return (
    <div className="aboutsection">
      <div className="intro-anim-container">
        <div className="intro-anim pop-in">
          <h2>I am</h2>
          <div className="intro-anim-text">
            <span className="typed-text">{currentText}</span>
            <span className="cursor">|</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default IntroSection;
