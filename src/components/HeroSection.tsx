import React, { useRef, useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { MapPin, Award, Calendar, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

const ParticleField = ({ containerRef, isMobile }) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0f172a, 1);
    
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    container.appendChild(renderer.domElement);
    
    const particleCount = 3500; // Reduced for better mobile performance
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const colorPalette = [
      new THREE.Color(0x00629B),
      new THREE.Color(0x78BE20),
      new THREE.Color(0x003a69),
      new THREE.Color(0x62991a),
    ];
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = randomColor.r;
      colors[i3 + 1] = randomColor.g;
      colors[i3 + 2] = randomColor.b;
    }
    
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });
    
    const points = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(points);
    camera.position.z = 3;
    
    let isMounted = true;
    
    const animate = () => {
      if (!isMounted) return;
      requestAnimationFrame(animate);
      const time = performance.now() * 0.001;
      points.rotation.y = time * 0.05;
      points.rotation.x = time * 0.02;
      renderer.render(scene, camera);
    };
    
    animate();
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [containerRef, isMobile]);
  
  return null;
};

const HeroSection = () => {
  const vantaRef = useRef(null);
  const threeContainerRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const [props] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 },
  }));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!vantaEffect && !isMobile && window.VANTA) {
      setVantaEffect(window.VANTA.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 0.5,
        scaleMobile: 1.00,
        color: 0x00629B,
        color2: 0x78BE20,
        size: 0.80,
        backgroundColor: 0x181818
      }));
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isMobile]);

  // Auto-scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900" id="home">
      {/* Background Effects */}
      <div ref={vantaRef} className="absolute inset-0 z-0 hidden md:block" />
      <div ref={threeContainerRef} className="absolute inset-0 z-0 block md:hidden">
        {isMobile && <ParticleField containerRef={threeContainerRef} isMobile={isMobile} />}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">
          {/* Logo Image - slightly larger on mobile */}
          <div className="mx-auto w-[140px] h-[105px] md:w-[192px] md:h-[144px] mb-2 md:mb-6">
            <img
              src="https://i.imgur.com/kXd5V5O.png"
              alt="IEEE Signal Processing Society Logo"
              className="w-full h-full object-contain"
              style={{ 
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
              }}
              loading="eager"
            />
          </div>
          
          {/* Decode X - lifted higher on mobile */}
          <div className="flex items-center justify-center mb-6 md:mb-12 -mt-4 md:mt-0">
            <img   
                  src="https://i.imgur.com/dVciStJ.png"
                  alt="X"
                  className="w-[280px] md:w-[320px] lg:w-[450px] h-auto object-contain md:-mb-8 md:-mt-10"
                  style={{ 
                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))'
                  }}
                  loading="eager"
            />
          </div>
          
          <animated.div style={props} className="flex flex-wrap justify-center gap-3 mb-6 md:mb-8 max-w-2xl">
            {[
              { icon: Calendar, text: 'June 12-14, 2025' },
              { icon: MapPin, text: 'BMSITM' },
              { icon: Award, text: '₹65,000 Prize Pool' }
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white/5 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all">
                <item.icon className="h-4 w-4 md:h-5 md:w-5 text-[#00629B] mr-2" />
                <span className="text-gray-300 text-sm">{item.text}</span>
              </div>
            ))}
          </animated.div>
          
          <animated.div style={props} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
            <Link
              to="/register"
              className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-[#00629B] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#00629B]/30 font-medium text-center text-sm md:text-base"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Register Now
            </Link>
            <a
              href="#about"
              className="px-6 py-2 md:px-8 md:py-3 bg-white/5 backdrop-blur-lg text-white rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 font-medium text-center text-sm md:text-base"
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
