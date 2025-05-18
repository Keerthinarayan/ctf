import React, { useRef, useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { MapPin, Award, Calendar, Code2 } from 'lucide-react';

const HeroSection = () => {
  const vantaRef = useRef(null);
  const canvasRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const isMobile = window.innerWidth < 768;

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
    if (!vantaEffect && typeof window !== 'undefined' && window.VANTA && !isMobile) {
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
        color2: 0xff3f81,
        size: 0.8,
        backgroundColor: 0x0f172a
      });
      
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.reset();
        if (this.y < 0 || this.y > canvas.height) this.reset();
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMobile]);

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
      {/* Desktop background effect */}
      <div ref={vantaRef} className="absolute inset-0 z-0 hidden md:block"></div>
      
      {/* Mobile background with particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 md:hidden">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">
          <img 
            src="https://i.imgur.com/kXd5V5O.png" 
            alt="IEEE Signal Processing Society Logo" 
            className="w-32 h-24 md:w-48 md:h-32 mx-auto"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' }}
          />
          
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight flex items-center">
              <Code2 className="w-10 h-10 md:w-16 md:h-16 mr-2 md:mr-4 animate-pulse" />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-text-gradient moving-gradient-text">
                Decode X
              </span>
            </h1>
          </div>
          
          <animated.div 
            style={props}
            className="grid grid-cols-1 md:flex md:flex-row justify-center gap-2 md:gap-6 mb-8 md:mb-12 w-full md:w-auto px-4 md:px-0"
          >
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 hover:border-white/20 transition-all hover:scale-105">
              <Calendar className="h-4 w-4 md:h-5 md:w-5 text-indigo-400" />
              <span className="text-gray-300 text-xs md:text-sm">June 12-14, 2025</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 hover:border-white/20 transition-all hover:scale-105">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-indigo-400" />
              <span className="text-gray-300 text-xs md:text-sm">IEEE SPS Campus</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 hover:border-white/20 transition-all hover:scale-105">
              <Award className="h-4 w-4 md:h-5 md:w-5 text-indigo-400" />
              <span className="text-gray-300 text-xs md:text-sm">₹50,000 Prize Pool</span>
            </div>
          </animated.div>
          
          <animated.div 
            style={props}
            className="flex flex-col gap-4 md:flex-row md:gap-6 mt-4 w-full md:w-auto px-4 md:px-0"
          >
            <a
              href="#register"
              className="w-full md:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/30 text-base md:text-lg font-medium transform hover:scale-105 text-center"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="w-full md:w-auto px-6 md:px-8 py-3 bg-white/5 backdrop-blur-lg text-white rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 text-base md:text-lg font-medium transform hover:scale-105 text-center"
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
