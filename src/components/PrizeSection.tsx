import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

const PrizeSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Prize <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">Pool</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Compete for a total prize pool of ₹50,000 and gain recognition for your innovative solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* First Place */}
          <div className="relative p-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl transform transition duration-300 hover:scale-105 max-w-sm w-full">
            <div className="bg-slate-900 rounded-xl p-8 h-full">
              <div className="flex flex-col items-center">
                <Trophy className="h-20 w-20 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">1st Prize</h3>
                <div className="text-yellow-500 text-4xl font-bold mb-4">₹25,000</div>
                <ul className="text-gray-300 space-y-2 text-center">
                  <li>Winner Trophy</li>
                  <li>Certificates</li>
                  <li>Industry Recognition</li>
                  <li>Internship Opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Place */}
          <div className="relative p-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded-2xl transform transition duration-300 hover:scale-105 max-w-sm w-full">
            <div className="bg-slate-900 rounded-xl p-8 h-full">
              <div className="flex flex-col items-center">
                <Award className="h-16 w-16 text-slate-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">2nd Prize</h3>
                <div className="text-slate-400 text-3xl font-bold mb-4">₹15,000</div>
                <ul className="text-gray-300 space-y-2 text-center">
                  <li>Runner-up Trophy</li>
                  <li>Certificates</li>
                  <li>Industry Recognition</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Place */}
          <div className="relative p-1 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 rounded-2xl transform transition duration-300 hover:scale-105 max-w-sm w-full">
            <div className="bg-slate-900 rounded-xl p-8 h-full">
              <div className="flex flex-col items-center">
                <Medal className="h-16 w-16 text-amber-800 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">3rd Prize</h3>
                <div className="text-amber-800 text-3xl font-bold mb-4">₹10,000</div>
                <ul className="text-gray-300 space-y-2 text-center">
                  <li>Second Runner-up Trophy</li>
                  <li>Certificates</li>
                  <li>Industry Recognition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Special Mentions */}
        <div className="mt-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Additional Prizes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800 rounded-lg">
              <div className="font-semibold text-indigo-400 mb-1">Best Innovation Award</div>
              <div className="text-gray-300">₹5,000 + Innovation Certificate</div>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <div className="font-semibold text-indigo-400 mb-1">Best Design Award</div>
              <div className="text-gray-300">₹5,000 + Design Excellence Certificate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;