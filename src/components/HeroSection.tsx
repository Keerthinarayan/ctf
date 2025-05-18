import React, { useRef, useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { MapPin, Award, Calendar, Code2 } from 'lucide-react';
import * as THREE from 'three';


const ParticleField = ({ containerRef, isMobile }) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0f172a, 1);
    
    
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    container.appendChild(renderer.domElement);
    
    
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    
    const colorPalette = [
      new THREE.Color(0x1e3a8a),  // deep blue
      new THREE.Color(0x3b82f6),  // blue
      new THREE.Color(0x6366f1),  // indigo
      new THREE.Color(0x7c3aed),  // violet
      new THREE.Color(0x8b5cf6),  // purple
      new THREE.Color(0xa855f7),  // light purple
      new THREE.Color(0xd946ef),  // pinkish purple
      new THREE.Color(0xec4899),  // pink
      new THREE.Color(0xf43f5e),  // red
      new THREE.Color(0x9f1239)   // maroon
    ];
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Random positions in a cube
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      // Assign random color from our palette
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
    
    // Position camera
    camera.position.z = 3;
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const time = clock.getElapsedTime();
      
      // Rotate particles slowly
      points.rotation.y = time * 0.05;
      points.rotation.x = time * 0.02;
      
      // Pulsing effect for particles
      const pulseFactor = Math.sin(time * 0.5) * 0.1 + 1;
      particlesMaterial.size = 0.03 * pulseFactor;
      
      renderer.render(scene, camera);
      const animationId = requestAnimationFrame(animate);
      return animationId;
    };
    
    const animationId = animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [containerRef, isMobile]);
  
  return null;
};

const HeroSection = () => {
  const vantaRef = useRef(null);
  const threeContainerRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const [props, api] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 },
  }));

  const [codeProps, codeApi] = useSpring(() => ({
    opacity: 1,
    config: { duration: 500 },
  }));

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  
  useEffect(() => {
    if (!vantaEffect && typeof window !== 'undefined' && window.VANTA && !isMobile) {
      const effect = window.VANTA.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 0.5,
        scaleMobile: 1.00,
        color: 0xffffff, 
        color2: 0xff3f81,
        size: 0.80,
        backgroundColor:0x30321
      });
      
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isMobile]);

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
      
      {/* Mobile background with Three.js particles */}
      <div 
        ref={threeContainerRef} 
        className="absolute inset-0 z-0 block md:hidden"
      >
        {isMobile && <ParticleField containerRef={threeContainerRef} isMobile={isMobile} />}
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
