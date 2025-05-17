import React from 'react';
import { Code, Cpu, Zap, Trophy } from 'lucide-react';

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

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 section-transition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About The <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">Event</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-xl">
            DecodeX is the premier 24-hour hackathon organized by IEEE SPS, bringing together the brightest minds to solve complex problems and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/20 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/50 shadow-xl transform transition-all hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-6 text-white">What is DecodeX?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              DecodeX is IEEE SPS's flagship 24-hour hackathon where participants decode, develop, and innovate. It's a platform for tech enthusiasts to showcase their problem-solving abilities, coding skills, and innovative thinking.
            </p>
            <p className="text-gray-300 text-lg">
              The event spans three days including an industrial visit, followed by an intensive 24-hour coding challenge broken into three strategic rounds, culminating in a prize distribution ceremony.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/20 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/50 shadow-xl transform transition-all hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-6 text-white">Why Participate?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              DecodeX offers more than just competition—it's a growth opportunity. Participants gain exposure to real-world problems, industry insights during the industrial visit, and mentor feedback throughout the event.
            </p>
            <p className="text-gray-300 text-lg">
              With a prize pool of ₹50,000, participants have the chance to win recognition and rewards for their innovative solutions. The event also provides invaluable networking opportunities with peers and industry professionals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-slate-800/20 rounded-xl p-8 border border-slate-700/30 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;