import React, { useState, useEffect } from 'react';
import { supabaseClient } from '../services/supabaseClient';
import RegistrationPopup from './RegistrationPopup';

const RegistrationSectionIV: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [registrationsClosed, setRegistrationsClosed] = useState(false);

  useEffect(() => {
    checkRegistrationCount();
  }, []);

  const checkRegistrationCount = async () => {
    try {
      const { count, error } = await supabaseClient
        .from('visit_registrations')
        .select('*', { count: 'exact' });

      if (error) throw error;
      
      if (count && count >= 15) {
        setRegistrationsClosed(true);
        setSubmitStatus({
          type: 'error',
          message: 'Registration is now closed as we have reached the maximum number of participants.'
        });
      }
    } catch (error) {
      console.error('Error checking registration count:', error);
    }
  };

  return (
    <section id="register-iv" className="py-20 bg-gradient-to-b from-slate-900 to-[#004B87]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Registration for{" "}
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Industrial Visit
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {registrationsClosed ? (
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-8 border-2 border-red-500/30 shadow-xl text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">Registrations Filled!</h3>
              <p className="text-lg text-gray-300 mb-6">
                We've reached maximum capacity for the Industrial Visit. Thank you for your overwhelming response!
              </p>
              
              <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 rounded-xl p-4 border border-[#78BE20]/30 mb-8">
                <h4 className="text-xl font-semibold text-[#78BE20] mb-3">But wait!</h4>
                <p className="text-gray-300 mb-4">
                  Registrations for <span className="font-bold text-white">Capture The Signal (CTS)</span> are still open!
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  Don't miss this exciting technical event. Limited spots available!
                </p>               
              </div>

              <div className="text-sm text-gray-400">
                <p>For any queries, please contact:</p>
                <p className="mt-2 text-[#78BE20]">core.team@decodex.one | 91 8618978745</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#78BE20] mx-auto mb-4"></div>
              <p className="text-gray-300">Checking registration status...</p>
            </div>
          )}
        </div>
      </div>
      
      {submitStatus && isPopupOpen && (
        <RegistrationPopup
          type={submitStatus.type}
          message={submitStatus.message}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </section>
  );
};

export default RegistrationSectionIV;
