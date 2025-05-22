import React, { useEffect } from 'react';
import { Shield, Terminal, Brain, Flag, Clock, Users, Award, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrizeSection from '../components/PrizeSection';

const CTFPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Web Exploitation",
      description: "Test your skills in finding and exploiting web vulnerabilities, including SQL injection, XSS, and CSRF attacks."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cryptography",
      description: "Crack codes, decipher messages, and solve cryptographic challenges using various encryption techniques."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Reverse Engineering",
      description: "Analyze and understand compiled programs to find hidden flags and vulnerabilities."
    },
    {
      icon: <Flag className="h-6 w-6" />,
      title: "Binary Exploitation",
      description: "Exploit binary vulnerabilities in programs to gain unauthorized access and capture flags."
    }
  ];

  const rounds = [
    {
      title: "Round 1: Qualification",
      time: "10:00 AM - 1:00 PM",
      description: "Teams solve basic challenges across all categories to qualify for the main event. Top 20 teams advance.",
      points: [
        "Basic challenges in all categories",
        "Focus on fundamental concepts",
        "Individual team participation",
        "Real-time scoreboard updates"
      ]
    },
    {
      title: "Round 2: Advanced Challenges",
      time: "2:00 PM - 6:00 PM",
      description: "Qualified teams tackle more complex challenges with increased difficulty and point values.",
      points: [
        "Advanced challenge sets",
        "Higher point values",
        "Team collaboration essential",
        "Dynamic flag deployment"
      ]
    },
    {
      title: "Round 3: Final Sprint",
      time: "7:00 PM - 10:00 PM",
      description: "The ultimate test with the most challenging problems and highest point values.",
      points: [
        "Expert-level challenges",
        "Maximum point values",
        "Special bonus flags",
        "Final rankings determined"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-[#004B87]/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
                Capture The Flag
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Test your cybersecurity skills in our intensive CTF competition featuring multiple categories and challenging problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <div className="flex items-center bg-[#004B87]/10 px-6 py-3 rounded-full">
                <Clock className="h-5 w-5 text-[#78BE20] mr-2" />
                <span className="text-gray-300">12-hour Competition</span>
              </div>
              <div className="flex items-center bg-[#004B87]/10 px-6 py-3 rounded-full">
                <Users className="h-5 w-5 text-[#78BE20] mr-2" />
                <span className="text-gray-300">Teams of 2-4</span>
              </div>
              <div className="flex items-center bg-[#004B87]/10 px-6 py-3 rounded-full">
                <Award className="h-5 w-5 text-[#78BE20] mr-2" />
                <span className="text-gray-300">₹50,000 Prize Pool</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-[#004B87]/20 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Challenge Categories
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
                <div className="text-[#78BE20] mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-gray-400">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Rounds */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-[#004B87]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Competition Format
            </span>
          </h2>
          <div className="space-y-8">
            {rounds.map((round, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-white">{round.title}</h3>
                  <div className="flex items-center text-[#78BE20]">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{round.time}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{round.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {round.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center text-gray-400">
                      <Flag className="h-4 w-4 text-[#78BE20] mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Section */}
      <PrizeSection />
    </div>
  );
};

export default CTFPage;
