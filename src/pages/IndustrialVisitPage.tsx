import React, { useEffect } from 'react';
import { AboutEvent } from '../components/AboutEvent';

const IndustrialVisitPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Video Banner Section */}
      <div className="relative h-screen">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="https://cbr-iisc.ac.in/wp-content/uploads/2024/11/banner-5.mp4" type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-12">
              {/* Logos at the top */}
              <div className="flex justify-center space-x-8">
                <img
                  src="https://i.imgur.com/PI5Ik4w.png"
                  alt="IEEE Signal Processing Society Logo"
                  className="w-32 h-32 object-contain filter brightness-0 invert"
                />
                <img
                  src="https://cbr-iisc.ac.in/wp-content/uploads/2024/05/cropped-logo-cbr-1.png"
                  alt="BMSIT Logo"
                  className="w-32 h-32 object-contain filter brightness-0 invert"
                />
              </div>

              {/* Text below logos */}
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Centre for Brain Research - IISc
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Exploring the frontiers of neuroscience and innovation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <AboutEvent />
    </div>
  );
};

export default IndustrialVisitPage;
