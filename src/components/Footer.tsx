import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-[#004B87]/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center mb-6 md:mb-8 -mt-4">
                <img   
                  src="https://i.imgur.com/dVciStJ.png"
                  alt="DecodeX Logo"
                  className="w-[150px] md:w-[180px] h-auto object-contain -mb-8 md:-mb-10"
                  style={{ 
                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))'
                  }}
                  loading="eager"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The 24-hour flagship event by IEEE SPS, challenging participants to decode, develop, and innovate.
            </p>
            <div className="flex items-start space-x-2 text-gray-400 text-sm mb-4">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <a 
                href="https://maps.google.com/?q=BMS+Institute+Of+Technology+Management+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#78BE20] transition-colors"
              >
                BMS Institute Of Technology & Management, Bengaluru
              </a>
            </div>
            <div className="flex space-x-4 text-gray-400 mt-6">
              <a 
                href="https://www.instagram.com/sps_bmsit/?utm_source=ig_web_button_share_sheet#" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#78BE20] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ieeespsbmsitm/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#78BE20] transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://chat.whatsapp.com/JImyalLUCR8DVpg86jOdYM" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#78BE20] transition-colors"
                aria-label="Join our WhatsApp group"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#78BE20] transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ctf" className="hover:text-[#78BE20] transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  CTS
                </Link>
              </li>
              <li>
                <Link to="/industrial-visit" className="hover:text-[#78BE20] transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Industrial Visit
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-[#78BE20] transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Important Dates Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Important Dates</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-gray-300">June 12, 2025</span>
                  <p className="text-sm">Industrial Visit</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-gray-300">June 13-14, 2025</span>
                  <p className="text-sm">CTS Event</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <div>
                  <span className="font-medium text-gray-300">June 14, 2025</span>
                  <p className="text-sm">Prize Distribution</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact Us Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="flex-shrink-0 mt-1 text-gray-400" />
                <a 
                  href="mailto:core.team@decodex.one"
                  className="hover:text-[#78BE20] transition-colors text-sm"
                >
                  core.team@decodex.one
                </a>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Phone size={18} className="flex-shrink-0 mt-0.5 text-gray-400" />
                  <div>
                    <span className="text-gray-300">Smriti</span>
                    <a 
                      href="tel:+917389296975"
                      className="hover:text-[#78BE20] transition-colors block text-sm"
                    >
                      +91 7389296975
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone size={18} className="flex-shrink-0 mt-0.5 text-gray-400" />
                  <div>
                    <span className="text-gray-300">Chinmay</span>
                    <a 
                      href="tel:+918618978745"
                      className="hover:text-[#78BE20] transition-colors block text-sm"
                    >
                      +91 8618978745
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-[#004B87]/30 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} DecodeX | IEEE SPS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
