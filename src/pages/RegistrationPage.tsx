import React from 'react';
import RegistrationSection from '../components/RegistrationSection';

const RegistrationPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="py-12 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Team <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">Registration</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              Register your team for DecodeX and be part of this exciting hackathon.
            </p>
          </div>
        </div>
      </div>
      <RegistrationSection />
    </div>
  );
};

export default RegistrationPage;
