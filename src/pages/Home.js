import React, { useEffect, useRef } from 'react';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection'; 
import ContactSection from '../components/ContactSection';
import SkillsAndEducationSection from '../components/SkillsAndEducaionSection';


const Home = () => {
  const sectionsRef = useRef([]);



  return (
    <div>
      <IntroSection ref={el => (sectionsRef.current[0] = el)} />
      <AboutSection ref={el => (sectionsRef.current[1] = el)} />
      <PortfolioSection ref={el => (sectionsRef.current[2] = el)} />
      <SkillsAndEducationSection ref={el => (sectionsRef.current[3] = el)} />
      <ContactSection ref={el => (sectionsRef.current[4] = el)} />
    </div>
  );
};

export default Home;
