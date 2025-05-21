import React from 'react';
import { Code, Cpu, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Challenging Problems',
      description: 'Tackle real-world complex coding challenges designed by industry experts.',
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'Learn & Network',
      description: 'Connect with fellow developers and industry professionals throughout the event.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: '24-Hour Sprint',
      description: 'Push your limits in an intensive coding marathon spanning 24 hours.',
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: 'Attractive Prizes',
      description: 'Compete for a prize pool of ₹50,000 and recognition from industry leaders.',
    },
  ];

  // IEEE Color Constants
  const IEEE_BLUE = '#004B87';
  const IEEE_BLUE_LIGHT = '#0063b3';
  const IEEE_GREEN = '#78BE20';
  const IEEE_GREEN_DARK = '#62991a';

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-slate-900 via-[#004B87]/20 to-slate-900 section-transition">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About The <span 
              className="bg-gradient-to-r from-[#004B87] via-[#0063b3] to-[#78BE20] bg-clip-text text-transparent">
              Event
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B87] to-[#78BE20] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-xl md:text-lg px-4 md:px-0 leading-relaxed">
            DecodeX is the premier 24-hour hackathon organized by IEEE SPS, bringing together the brightest minds to solve complex problems and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 w-[85%] md:w-full mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[#0063b3]/30 shadow-xl transform transition-all hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#004B87]/5 to-[#78BE20]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">What is DecodeX?</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                DecodeX is IEEE SPS's flagship 24-hour hackathon where participants decode, develop, and innovate.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Industrial visit to leading tech companies</li>
                <li>24-hour intensive coding challenge</li>
                <li>Three strategic competition rounds</li>
                <li>Expert mentorship throughout</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-[#78BE20]/20 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[#78BE20]/30 shadow-xl transform transition-all hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#004B87]/5 to-[#78BE20]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Why Participate?</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                DecodeX offers more than just competition—it's a growth opportunity.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Solve real-world industry problems</li>
                <li>Get direct feedback from mentors</li>
                <li>Win from a ₹50,000 prize pool</li>
                <li>Network with industry professionals</li>
                <li>Enhance your portfolio</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-[85%] md:w-full mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-slate-800/80 ${
                index % 2 === 0 
                  ? 'to-[#004B87]/20 border-[#0063b3]/30' 
                  : 'to-[#78BE20]/20 border-[#78BE20]/30'
              } rounded-xl p-6 md:p-8 border shadow-xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`w-16 h-16 rounded-full ${
                index % 2 === 0 
                  ? 'bg-gradient-to-r from-[#004B87]/20 to-[#0063b3]/20 text-[#0063b3]'
                  : 'bg-gradient-to-r from-[#78BE20]/20 to-[#62991a]/20 text-[#78BE20]'
              } flex items-center justify-center mb-6 group-hover:text-white transition-colors`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full text-lg font-medium hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
