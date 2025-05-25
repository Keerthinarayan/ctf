import React, { useEffect } from 'react';
import { AboutEvent } from '../components/AboutEvent';

const IndustrialVisitPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <AboutEvent />
    </div>
  );
};

export default IndustrialVisitPage;
