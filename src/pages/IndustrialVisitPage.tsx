import React, { useEffect, useState } from 'react';
import { AboutEvent } from '../components/AboutEvent';

const IndustrialVisitPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Video Banner Section */}
      <div className={`relative ${isMobile ? 'h-[100vh]' : 'h-[100svh]'}`}>
        {/* Video Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`h-full object-cover ${
              isMobile 
                ? 'w-[300%] object-right' 
                : 'w-full object-center'
            }`}
            style={{ 
              filter: 'brightness(0.6)',
              ...(isMobile && { 
                transform: 'translateX(-50%)',
                minWidth: '300%'
              })
            }}
            poster="https://cbr-iisc.ac.in/wp-content/uploads/2024/11/banner-5-poster.jpg"
          >
            <source src="https://cbr-iisc.ac.in/wp-content/uploads/2024/11/banner-5.mp4" type="video/mp4" />
            <source src="https://cbr-iisc.ac.in/wp-content/uploads/2024/11/banner-5.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Overlay - Always centered */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4 md:space-y-8">
              {/* Logos */}
              <div className="flex justify-center space-x-4 md:space-x-8">
                <img
                  src="https://i.imgur.com/PI5Ik4w.png"
                  alt="IEEE Signal Processing Society Logo"
                  className="w-16 h-16 md:w-32 md:h-32 object-contain filter brightness-0 invert"
                  loading="lazy"
                />
                <img
                  src="https://cbr-iisc.ac.in/wp-content/uploads/2024/05/cropped-logo-cbr-1.png"
                  alt="BMSIT Logo"
                  className="w-16 h-16 md:w-32 md:h-32 object-contain filter brightness-0 invert"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="text-center text-white px-2">
                <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-2 md:mb-6 leading-snug md:leading-tight">
                  Centre for Brain Research - IISc
                </h1>
                <p className="text-sm sm:text-lg text-gray-200 mb-4 md:mb-8 max-w-2xl mx-auto">
                  Exploring the frontiers of neuroscience and innovation
                  <br />
                  <span className="text-xs sm:text-sm text-gray-300 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="inline-block w-4 h-4 md:w-5 md:h-5 mr-1"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    12th May, 2025 (subject to change)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className={`${isMobile ? 'w-5 h-8' : 'w-6 h-10 md:w-8 md:h-12'} rounded-full border-2 border-white flex items-start justify-center`}>
            <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <AboutEvent />
    </div>
  );
};

export default IndustrialVisitPage;
