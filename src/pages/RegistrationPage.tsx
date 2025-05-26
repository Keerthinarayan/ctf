import React, { useEffect, useState } from 'react';
import RegistrationSection from '../components/RegistrationSection';
import RegistrationSectionIV from '../components/RegistrationSectionIV';

const RegistrationPage: React.FC = () => {
  const [registrationType, setRegistrationType] = useState<'ctf' | 'industrial' | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelection = (type: 'ctf' | 'industrial') => {
    setRegistrationType(type);
    // Scroll to the corresponding section
    setTimeout(() => {
      const sectionId = type === 'ctf' ? 'register' : 'register-iv';
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to ensure section is rendered
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="pt-20 pb-10 bg-gradient-to-b from-slate-900 to-[#004B87]/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Team{" "}
              <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
                Registration
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Register your team for DecodeX and be part of this exciting hackathon or industrial visit.
            </p>
          </div>
        </div>
      </section>

      {/* Selection Form Section */}
      <section className="pb-6 bg-gradient-to-b from-[#004B87]/20 to-slate-900 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h2 className="text-3xl font-bold text-center mb-6 text-white">Select Registration Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  onClick={() => handleSelection('ctf')}
                  className={`px-6 py-3 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105 ${
                    registrationType === 'ctf' ? 'ring-2 ring-[#78BE20]' : ''
                  }`}
                >
                  Capture The Signal (CTS) Registration
                </button>
                <button
                  onClick={() => handleSelection('industrial')}
                  className={`px-6 py-3 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105 ${
                    registrationType === 'industrial' ? 'ring-2 ring-[#78BE20]' : ''
                  }`}
                >
                  Industrial Visit Registration
                </button>
              </div>
              {registrationType === null && (
                <p className="text-gray-400 text-center mt-4">Please select a registration type to proceed.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Conditional Rendering of Registration Sections */}
      {registrationType === 'ctf' && <RegistrationSection />}
      {registrationType === 'industrial' && <RegistrationSectionIV />}
    </div>
  );
};

export default RegistrationPage;