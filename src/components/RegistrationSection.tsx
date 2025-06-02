import React from 'react';
import { Calendar, Mail, Phone, User } from 'lucide-react';

const RegistrationSection: React.FC = () => {
  return (
    <section id="register" className="py-20 bg-gradient-to-b from-slate-900 to-[#004B87]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Important <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">Update</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We have an important announcement about Capture The Signal (CTS)
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-8 border border-[#78BE20]/30 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#004B87]/20 rounded-full border border-[#78BE20]/30">
                <Calendar className="h-12 w-12 text-[#78BE20]" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Event Date Changed to September!
            </h3>

            <div className="space-y-6 text-gray-300 text-lg mb-8">
              <p>
                Due to unforeseen circumstances, we're moving Capture The Signal (CTS) to September to ensure we deliver the best possible experience for all participants.
              </p>
              
              <div className="bg-gradient-to-r from-[#004B87]/30 to-[#78BE20]/30 p-4 rounded-lg border border-[#78BE20]/30">
                <p className="font-semibold text-white">
                  For those who have already registered:
                </p>
                <ul className="mt-2 space-y-2 text-left pl-4">
                  <li className="flex items-start">
                    <span className="text-[#78BE20] mr-2">✓</span>
                    <span>Your registration remains valid for the September event</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#78BE20] mr-2">✓</span>
                    <span>Full refunds available upon request</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#78BE20] mr-2">✓</span>
                    <span>We'll contact you with new dates soon</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-slate-900/50 rounded-xl p-4 border border-[#78BE20]/30">
                <h4 className="text-xl font-semibold text-white mb-4">
                  <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
                    Contact CTS Team
                  </span>
                </h4>
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#78BE20] mr-2" />
                    <a href="mailto:core.team@decodex.one" className="text-white hover:text-[#78BE20] transition-colors">
                      core.team@decodex.one
                    </a>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-[#78BE20] mr-2" />
                    <span className="text-white">Smriti: </span>
                    <a href="tel:+917389296975" className="text-white hover:text-[#78BE20] transition-colors ml-1">
                      +91 7389296975
                    </a>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-[#78BE20] mr-2" />
                    <span className="text-white">Chinmay: </span>
                    <a href="tel:+918618978745" className="text-white hover:text-[#78BE20] transition-colors ml-1">
                      +91 8618978745
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-6">
                We appreciate your understanding and can't wait to see you in September for an incredible Capture The Signal experience!
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
              <a
                href="mailto:core.team@decodex.one?subject=CTS%20Refund%20Request"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#004B87] to-[#004B87]/80 text-white rounded-full hover:from-[#003a69] hover:to-[#003a69] transition-all"
              >
                <Mail className="h-5 w-5 mr-2" />
                Request Refund
              </a>
              <a
                href="tel:+918618978745"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#78BE20] to-[#78BE20]/80 text-white rounded-full hover:from-[#62991a] hover:to-[#62991a] transition-all"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Organizer (Chinmay)
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-[#78BE20]/20">
              <p className="text-sm text-gray-400">
                Stay tuned for updates about Capture The Signal on our official channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
