import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-[#004B87]/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              
              <div className="flex items-center justify-center mb-6 md:mb-12 -mt-4 md:mt-0">
            <img   
                  src="https://i.imgur.com/dVciStJ.png"
                  alt="X"
                  className="w-[150px] md:w-[200px] lg:w-[200px] h-auto object-contain -mb-8 md:-mb-12 "
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
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-[#78BE20] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#78BE20] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#78BE20] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#78BE20] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#78BE20] transition-colors">Home</Link>
              </li>
              
              <li>
                <Link to="/ctf" className="hover:text-[#78BE20] transition-colors">CTS</Link>
              </li>
              <li>
                <Link to="/industrial-visit" className="hover:text-[#78BE20] transition-colors">Industrial Visit</Link>
              </li>
             
              <li>
                <Link to="/register" className="hover:text-[#78BE20] transition-colors">Register</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:-ml-12 lg:-ml-12 ">
            <h3 className="text-lg font-semibold mb-4">Important Dates</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="w-36">June 12, 2025</span>
                <span>Industrial Visit</span>
              </li>
              <li className="flex items-center">
                <span className="w-36">June 13-14, 2025</span>
                <span>CTS Event</span>
              </li>
              <li className="flex items-center">
                <span className="w-36">June 14, 2025</span>
                <span>Prize Distribution</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>core.team@decodex.one</span>
                
              </div>
               <ul className="space-y-1.5 text-gray-400">
              <li className="flex items-center">
                <span className="w-20">Smriti</span>
                <span>: +91 7389296975</span>
              </li>
              <li className="flex items-center">
                <span className="w-20">Chinmay</span>
                <span>: +91 8618978745</span>
              </li>
            </ul>
             
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#004B87]/30 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} DecodeX | IEEE SPS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
