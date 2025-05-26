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
        className="h-0.5 bg-gradient-to-r from-[#004B87] to-[#78BE20] absolute bottom-0 left-0 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-white group ml-3"
            >
              <img
                  src="https://i.imgur.com/mhfOnml.png"
                  alt="X"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-12 lg:h-12 object-contain"
                  style={{ 
                    filter: 'drop-shadow(0 0 8px rgba(120, 190, 32, 0.5))'
                  }}
                  loading="eager"
                />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-[#78BE20] hover:scale-105 ${
                location.pathname === '/' ? 'text-[#78BE20]' : 'text-gray-200'
              }`}
            >
              Home
            </Link>
            <Link
              to="/ctf"
              className={`text-sm font-medium transition-all duration-300 hover:text-[#78BE20] hover:scale-105 ${
                location.pathname === '/ctf' ? 'text-[#78BE20]' : 'text-gray-200'
              }`}
            >
              CTS
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full font-medium transform hover:from-[#003a69] hover:to-[#62991a] hover:scale-105 transition-all"
            >
              Register
            </Link>
          </nav>

          <button
            className="block md:hidden text-gray-200 focus:outline-none z-50"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <animated.div
            style={backdropAnimation}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleMenu}
          />
        )}

        <animated.div
          style={menuAnimation}
          className="fixed top-0 left-0 h-full w-3/4 bg-slate-900 shadow-lg z-40 md:hidden"
        >
          <div className="flex flex-col p-6">
            <div className="flex items-center mb-8">
              <Code2 className="h-6 w-6 text-[#78BE20] mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
                DecodeX
              </span>
            </div>
            
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                  location.pathname === '/'
                    ? 'bg-[#78BE20]/10 text-[#78BE20]'
                    : 'text-gray-200 hover:bg-[#78BE20]/10'
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/ctf"
                className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                  location.pathname === '/ctf'
                    ? 'bg-[#78BE20]/10 text-[#78BE20]'
                    : 'text-gray-200 hover:bg-[#78BE20]/10'
                }`}
                onClick={toggleMenu}
              >
                CTS
              </Link>
              <Link
                to="/register"
                className="text-lg font-medium py-2 px-4 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-lg text-center hover:from-[#003a69] hover:to-[#62991a] transition-all"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </div>
          </div>
        </animated.div>
      </div>
    </header>
  );
};

export default Header;
