import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection'; 
import AboutSection from '../components/AboutSection'; 
import PortfolioSection from '../components/PortfolioSection'; 
import ContactSection from '../components/ContactSection';

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pop-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sectionsRef.current.forEach(section => observer.observe(section));

    return () => {
      sectionsRef.current.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <HeroSection ref={el => (sectionsRef.current[0] = el)} />
      <AboutSection ref={el => (sectionsRef.current[1] = el)} />
      <PortfolioSection ref={el => (sectionsRef.current[2] = el)} />
      <ContactSection ref={el => (sectionsRef.current[3] = el)} />
    </div>
  );
};

export default Home;
