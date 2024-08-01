import React, { useEffect, useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const texts = ["Soumyadeep Maity.....", "A Web developer.....", "A Software Engineer.....", "An Artist....", "A Visonary....."];
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
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingSpeed = isDeleting ? 30 : 70;
    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, currentText, index, texts]);

  return (
    <div className="aboutsection">
      <div className="intro-row">
        <div className="intro-anim pop-in">
          <h2>I am...</h2>
          <div className="intro-anim-text">
            <span className="typed-text">{currentText}</span>
            <span className="cursor">|</span>
          </div>
        </div>
        <div className="intro-content pop-in">
          <div className="intro-text">
            <h1>About Me</h1>
            <p>
              Hi, I’m Soumyadeep Maity, a passionate web developer based in Kolkata, India. With a keen interest in cutting-edge technology and design, I’ve been working on various projects that showcase my skills and creativity.

              On my Instagram, you can catch glimpses of my daily life, interests, and the projects I’m working on. I share updates, insights, and occasional behind-the-scenes looks into my development journey.

              For a deeper dive into my work, visit my GitHub. There, you'll find repositories showcasing my latest projects, including web development work, AI chatbot projects, and other programming endeavors. My GitHub is a testament to my commitment to continuous learning and innovation in the tech space.

              Feel free to connect with me through my social media profiles or explore my GitHub to see what I’m up to!
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="skills-card card pop-in">
          <h2>Skills</h2>
          <div className="skill-item">
            <h3>JavaScript</h3>
            <div className="skill-bar" style={{ width: '90%' }}></div>
          </div>
          <div className="skill-item">
            <h3>React</h3>
            <div className="skill-bar" style={{ width: '85%' }}></div>
          </div>
          <div className="skill-item">
            <h3>Python</h3>
            <div className="skill-bar" style={{ width: '80%' }}></div>
          </div>
          <div className="skill-item">
            <h3>Java</h3>
            <div className="skill-bar" style={{ width: '75%' }}></div>
          </div>
          <div className="skill-item">
            <h3>C/C++</h3>
            <div className="skill-bar" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="education-card card pop-in">
          <h2>Education</h2>
          <div className="education-item">
            <h3>B.Tech in Computer Science and Business System</h3>
            <p>Sister Nivedita University, GPA: 7.4 (Ongoing)</p>
          </div>
          <div className="education-item">
            <h3>Higher Secondary</h3>
            <p>Kendriya Vidyalaya Alipore, Kolkata, Percentage: 66.9%</p>
          </div>
          <div className="education-item">
            <h3>Secondary School</h3>
            <p>Kendriya Vidyalaya Alipore, Kolkata, Percentage: 73.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
