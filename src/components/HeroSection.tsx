import React, { useRef, useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { MapPin, Award, Calendar, Code2 } from 'lucide-react';

const HeroSection = () => {
 
  const vantaRef = useRef(null);

  const [vantaEffect, setVantaEffect] = useState(null);

  const [props, api] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 },
  }));

  const [codeProps, codeApi] = useSpring(() => ({
    opacity: 1,
    config: { duration: 500 },
  }));

  useEffect(() => {
    if (!vantaEffect && typeof window !== 'undefined' && window.VANTA) {
      
      const effect = window.VANTA.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        color2: 0xff3f81
      });
      
      // Store the effect in state
      setVantaEffect(effect);
    }

    // Cleanup function to destroy Vanta effect when component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]); // Dependency array ensures this runs once

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      codeApi.start({
        opacity: codeProps.opacity.get() === 1 ? 0.3 : 1,
      });
    }, 1000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* This div will hold our Vanta effect */}
      <div ref={vantaRef} className="absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">
          <img 
            src="https://i.imgur.com/kXd5V5O.png" 
            alt="IEEE Signal Processing Society Logo" 
            className="w-48 h-32 mx-auto"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' }}
          />
          
          <div className="flex items-center justify-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight flex items-center">
              <Code2 className="w-16 h-16 mr-4 animate-pulse" />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-text-gradient moving-gradient-text">
                Decode X
              </span>
            </h1>
          </div>
          
          <animated.div 
            style={props}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition-all hover:scale-105">
              <Calendar className="h-5 w-5 text-indigo-400" />
              <span className="text-gray-300 text-sm">June 12-14, 2025</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition-all hover:scale-105">
              <MapPin className="h-5 w-5 text-indigo-400" />
              <span className="text-gray-300 text-sm">IEEE SPS Campus</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition-all hover:scale-105">
              <Award className="h-5 w-5 text-indigo-400" />
              <span className="text-gray-300 text-sm">₹50,000 Prize Pool</span>
            </div>
          </animated.div>
          
          <animated.div 
            style={props}
            className="flex flex-col sm:flex-row gap-6 mt-4"
          >
            <a
              href="#register"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/30 text-lg font-medium transform hover:scale-105"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-white/5 backdrop-blur-lg text-white rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 text-lg font-medium transform hover:scale-105"
            >
              Learn More
            </a>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;