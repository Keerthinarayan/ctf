import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const [showCodeBracket, setShowCodeBracket] = useState(true);

  const menuAnimation = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 280, friction: 60 },
  });

  const backdropAnimation = useSpring({
    opacity: isOpen ? 0.5 : 0,
    config: { tension: 280, friction: 60 },
  });

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
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Timeline', path: '/timeline' },
              { name: 'Register', path: '/register' },
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
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-gray-200 focus:outline-none z-50"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <animated.div
            style={backdropAnimation}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Menu */}
        <animated.div
          style={menuAnimation}
          className="fixed top-0 left-0 h-full w-3/4 bg-slate-900 shadow-lg z-40 md:hidden"
        >
          <div className="flex flex-col p-6">
            <div className="flex items-center mb-8">
              <Code2 className="h-6 w-6 text-indigo-400 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                DecodeX
              </span>
            </div>
            
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Timeline', path: '/timeline' },
                { name: 'Register', path: '/register' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'text-gray-200 hover:bg-indigo-500/10'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </animated.div>
      </div>
    </header>
  );
};

export default Header;