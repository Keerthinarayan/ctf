import React from 'react';
import { Calendar, Mail, Phone, User, BookOpen } from 'lucide-react';

const RegistrationSection: React.FC = () => {
  return (
    <section id="register" className="py-20 bg-gradient-to-b from-slate-900 to-[#004B87]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">Important Announcement</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Regarding Capture The Signal (CTS) Event Schedule
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
              Event Rescheduled to September
            </h3>

            <div className="space-y-6 text-gray-300 text-lg mb-8">
              <div className="flex items-start bg-slate-900/50 rounded-lg p-4 border border-[#78BE20]/30">
                <BookOpen className="flex-shrink-0 h-5 w-5 text-[#78BE20] mt-1 mr-3" />
                <p>
                  After careful consideration, we've decided to reschedule CTS to September. This decision was made to accommodate:
                </p>
              </div>
              
              <ul className="space-y-3 text-left max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-[#78BE20] mr-2">•</span>
                  <span>Academic schedules and examination periods of participating students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#78BE20] mr-2">•</span>
                  <span>Synchronization with organizational and event ecosystems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#78BE20] mr-2">•</span>
                  <span>Other Unforeseen circumstances</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#004B87]/30 to-[#78BE20]/30 p-4 rounded-lg border border-[#78BE20]/30 mt-6">
                <h4 className="font-semibold text-white mb-3">For Registered Participants:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-slate-900/40 p-3 rounded-lg">
                    <div className="text-[#78BE20] font-medium mb-1">Your Registration</div>
                    <p>Automatically valid for the September event</p>
                  </div>
                  <div className="bg-slate-900/40 p-3 rounded-lg">
                    <div className="text-[#78BE20] font-medium mb-1">Refund Policy</div>
                    <p>Full refunds available for participants who wants to pull out</p>
                  </div>
                  <div className="bg-slate-900/40 p-3 rounded-lg">
                    <div className="text-[#78BE20] font-medium mb-1">Updates</div>
                    <p>Exact dates coming soon</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-900/50 rounded-xl p-4 border border-[#78BE20]/30">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#78BE20] mr-2" />
                    <a href="mailto:core.team@decodex.one" className="text-white hover:text-[#78BE20] transition-colors">
                      core.team@decodex.one
                    </a>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-[#78BE20] mr-2" />
                    <a href="tel:+917389296975" className="text-white hover:text-[#78BE20] transition-colors">
                      Smriti: +91 7389296975
                    </a>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-[#78BE20] mr-2" />
                    <a href="tel:+918618978745" className="text-white hover:text-[#78BE20] transition-colors">
                      Chinmay: +91 8618978745
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-white italic">
                "We appreciate your understanding and are committed to delivering an exceptional CTS experience this September."
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
                Contact Organizer
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-[#78BE20]/20">
              <p className="text-sm text-gray-400">
                Official communications will be sent to registered participants via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
