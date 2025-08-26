import React from 'react';
import Hero from './Hero';
import MedicalServices from './MedicalServices'; 
// A linha 'import About from './About';' foi removida daqui
import Team from './Team';
import Contact from './Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <MedicalServices /> 
      {/* A linha '<About />' foi removida daqui */}
      <Team />
      <Contact />
    </>
  );
};

export default HomePage;
