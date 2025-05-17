import React from 'react';
import TimelineSection from '../components/TimelineSection';
import PrizeSection from '../components/PrizeSection';

const TimelinePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="py-12 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Event <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">Timeline</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              A comprehensive schedule of DecodeX, from the industrial visit to the final prize distribution.
            </p>
          </div>
        </div>
      </div>
      
      <TimelineSection />
      <PrizeSection />
    </div>
  );
};

export default TimelinePage;