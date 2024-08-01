import React from 'react';
import './SkillsAndEducaionSection.css';

const SkillsAndEducationSection = () => {
  return (
    <div className="skills-and-education-section">
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
  );
};

export default SkillsAndEducationSection;
