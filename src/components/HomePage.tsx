import React from 'react';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import Team from './Team';
import Contact from './Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Team />
      <Contact />
    </>
  );
};

export default HomePage;