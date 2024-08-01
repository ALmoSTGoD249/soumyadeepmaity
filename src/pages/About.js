import React from 'react';
import './About.css'; 
import profilepic from './profilepic.png';


const AboutPage = () => {
  return (
    <div className="about">
      <section className="intro pop-in">
        <div className="intro-content">
          <img src={profilepic} alt="Profile" className="profile-pic" />
          <div className="intro-text">
            <h1>About Me</h1>
            <p>Hi, I’m Soumyadeep Maity, a passionate web developer based in Kolkata, India. With a keen interest in cutting-edge technology and design, I’ve been working on various projects that showcase my skills and creativity.

On my Instagram, you can catch glimpses of my daily life, interests, and the projects I’m working on. I share updates, insights, and occasional behind-the-scenes looks into my development journey.

For a deeper dive into my work, visit my GitHub. There, you'll find repositories showcasing my latest projects, including web development work, AI chatbot projects, and other programming endeavors. My GitHub is a testament to my commitment to continuous learning and innovation in the tech space.

Feel free to connect with me through my social media profiles or explore my GitHub to see what I’m up to!</p>
          </div>
        </div>
      </section>

      <div className="card-container">
        <section className="card skills pop-in">
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
        </section>

        <section className="card experience pop-in">
          <h2>Experience & Projects</h2>
          <div className="experience-item">
            <h3>Artificial Intelligence and Prompt Engineering</h3>
            <p>Developed two projects using OpenAI’s revolutionary model GPT-4 named Hagrid, which included a desktop and Android client. The Android app was a chat app using GPT-4 Turbo as the engine and was written in Kotlin. The desktop client was an automation software written in Python.</p>
          </div>
          <div className="experience-item">
            <h3>Web Development Projects</h3>
            <p>Worked on a real-life project for a friend - <a href="https://www.vashmeinkriti.com">www.vashmeinkriti.com</a>. I designed the UI and handled the front end with minimal back-end involvement. The project was built using Node.js and React.js.</p>
          </div>
          <div className="experience-item">
            <h3>Ongoing Projects</h3>
            <p>SongSift - An AI model that can recommend new music based on listeners' taste in music. Racing News Network - A personal project covering stories and news from the world of motorsports.</p>
          </div>
        </section>

        <section className="card education pop-in">
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
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
