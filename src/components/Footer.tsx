import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                DecodeX
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The 24-hour flagship event by IEEE SPS, challenging participants to decode, develop, and innovate.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/timeline" className="hover:text-indigo-400 transition-colors">Timeline</Link>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">About Event</a>
              </li>
              <li>
                <a href="#register" className="hover:text-indigo-400 transition-colors">Register</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Important Dates</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="w-24">June 12, 2025</span>
                <span>Industrial Visit</span>
              </li>
              <li className="flex items-center">
                <span className="w-24">June 13, 2025</span>
                <span>Main Event</span>
              </li>
              <li className="flex items-center">
                <span className="w-24">June 14, 2025</span>
                <span>Prize Distribution</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>decodex@ieeesps.org</span>
              </div>
              <a 
                href="#contact" 
                className="inline-block px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-indigo-500/20 mt-2"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} DecodeX | IEEE SPS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;