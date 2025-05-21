
import React, { useEffect } from 'react';
import { AboutEvent } from '../components/AboutEvent';

export const AboutEventPage = () => {
    // Scroll to top on mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div>
        <AboutEvent />
    </div>
  )
}
