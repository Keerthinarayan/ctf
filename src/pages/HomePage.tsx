import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TimelineSection from '../components/TimelineSection';
import SponsorsSection from '../components/SponsorsSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <SponsorsSection />
    </div>
  );
};

export default HomePage;
