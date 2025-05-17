import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const [showCodeBracket, setShowCodeBracket] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / windowHeight) * 100;
      
      setScrollProgress(progress);
      setScrolled(scrollPosition > 10);
    };

    const blinkInterval = setInterval(() => {
      setShowCodeBracket(prev => !prev);
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(blinkInterval);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div 
        className="h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 absolute bottom-0 left-0 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-white group"
            >
              <span className={`text-white transition-opacity duration-500 ${showCodeBracket ? 'opacity-100' : 'opacity-30'}`}>&lt;/&gt;</span>
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent ml-2">
                DecodeX
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Timeline', path: '/timeline' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-indigo-400 hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-indigo-400'
                    : 'text-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#register"
              className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-indigo-500/20 hover:scale-105"
            >
              Register
            </a>
          </nav>

          <button
            className="block md:hidden text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4 text-center">
              {[
                { name: 'Home', path: '/' },
                { name: 'Timeline', path: '/timeline' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium py-2 transition-colors hover:text-indigo-400 ${
                    location.pathname === item.path
                      ? 'text-indigo-400'
                      : 'text-gray-200'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="#register"
                className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md mx-auto w-max"
                onClick={() => setIsOpen(false)}
              >
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;