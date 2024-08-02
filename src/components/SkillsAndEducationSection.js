import React from 'react';
import './SkillsAndEducationSection.css';
import { FaJsSquare, FaReact, FaPython, FaJava, FaCode } from 'react-icons/fa';

const SkillsAndEducationSection = () => {
  return (
    <div className="skills-and-education-section">
      <div className="skills-card card pop-in">
        <h2>Skills</h2>
        <div className="skill-item">
          <FaJsSquare className="skill-icon" />
          <h3>JavaScript</h3>
          <div className="circle-wrap">
            <div className="circle js">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle">90%</div>
            </div>
          </div>
        </div>
        <div className="skill-item">
          <FaReact className="skill-icon" />
          <h3>React</h3>
          <div className="circle-wrap">
            <div className="circle react">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle">85%</div>
            </div>
          </div>
        </div>
        <div className="skill-item">
          <FaPython className="skill-icon" />
          <h3>Python</h3>
          <div className="circle-wrap">
            <div className="circle python">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle">80%</div>
            </div>
          </div>
        </div>
        <div className="skill-item">
          <FaJava className="skill-icon" />
          <h3>Java</h3>
          <div className="circle-wrap">
            <div className="circle java">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle">75%</div>
            </div>
          </div>
        </div>
        <div className="skill-item">
          <FaCode className="skill-icon" />
          <h3>C/C++</h3>
          <div className="circle-wrap">
            <div className="circle cpp">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle">70%</div>
            </div>
          </div>
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
