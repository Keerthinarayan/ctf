import React, { useEffect } from 'react';
import { Shield, Terminal, Brain, Flag, Clock, Users, Award, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrizeSection from '../components/PrizeSection';

const CTFPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rounds = [
    {
      title: "ROUND 1: PUZZLE RUSH",
      date: "June 13, 2025",
      time: "10:00 AM - 4:00 PM",
      description: "Think fast. Solve faster. The game kicks off with a wild set of mind-melting puzzles a leaderboard based battle where every correct answer counts. Only the sharpest teams make it through",
      points: [
        "⚡ Rapid-fire logic and puzzle challenges",
        "🧠 Focused on analytical thinking",
        "📈 leaderboard based elimination",
        "🔥 Only the top 50% move on"
      ]
    },
    {
      title: " ROUND 2: THE ALL-NIGHTER",
      date: "June 13 - June 14, 2025",
      time: "5:00 PM - 7:00 AM",
      description: "It’s midnight madness – where things get serious. This all-nighter throws challenging puzzles, conceptual problems, and a sprinkle of microcontroller-based logic games into the mix. Teamwork? Essential. Sleep? Optional.",
      points: [
        "🔥 Higher-difficulty problems",
        "🧩 Mixed with microcontroller-based logics",
        "🎯 leaderboard based elimination",
        "✅ Only 16 teams survive to the final showdown"
      ]
    },
    {
      title: "ROUND 3: THE FINAL STANDOFF ",
      date: "June 14, 2025",
      time: "8:00 AM - 12:00 PM",
      description: "It’s bracket time.The top 16 clash in an intense head-to-head format. One-on-one matchups. Win or get eliminated. Only the smartest and fastest teams climb to the top.",
      points: [
        "⚔️ 1v1 bracket duels – lose and you're out",
        "👀 No prior hardware knowledge required – just GPT-powered reasoning",
        "🏆 Top 3 emerge victorious",
        "🎖️ Glory, bragging rights, and ultimate CTS domination"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - reduced bottom padding from py-20 to py-16 */}

      {/* Competition Rounds */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-[#004B87]/20">
      <div className="container mx-auto px-4 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
                Capture The Signal 2.0
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Capture The Signal is a fast-paced decoding challenge hosted by the IEEE Signal Processing Society. Use your signal processing skills to analyze, interpret, and decode hidden data from complex signals. Get ready to crack the code!
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <div className="flex items-center bg-[#004B87]/10 px-6 py-3 rounded-full">
                <Clock className="h-5 w-5 text-[#78BE20] mr-2" />
                <span className="text-gray-300">24-hour Competition</span>
              </div>
              <div className="flex items-center bg-[#004B87]/10 px-6 py-3 rounded-full">
                <Users className="h-5 w-5 text-[#78BE20] mr-2" />
                <span className="text-gray-300">Teams of 3–4</span>
              </div>
              <div className="flex items-center bg-[#004B87]/10 px-6 py-3 rounded-full">
                <Award className="h-5 w-5 text-[#78BE20] mr-2" />
                <span className="text-gray-300">₹65,000 Prize Pool</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Competition Format  */}
        <div className="container mx-auto px-4 pt-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Competition Format
            </span>
          </h2>
          <div className="w-full flex justify-center">

            {/* Competition Format Boxes */}
            <div className="w-[80%] space-y-10">
              {rounds.map((round, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-8 border border-[#78BE20]/30 shadow-xl  "
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <h3 className="text-2xl font-semibold text-white">{round.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-3 text-sm">
                      <div className="flex items-center text-[#78BE20]">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{round.date}</span>
                      </div>
                      <span className="hidden md:block text-gray-500">|</span>
                      <div className="flex items-center text-[#78BE20]">
                        <span>{round.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{round.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {round.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-gray-400">
                        <span className="text-[#78BE20] mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Prize Section */}
      <PrizeSection />
    </div>
  );
};

export default CTFPage;
