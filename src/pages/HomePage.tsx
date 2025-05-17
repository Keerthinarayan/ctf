import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;