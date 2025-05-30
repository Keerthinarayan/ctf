import React from 'react';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrizeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#004B87]/20 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Prize <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">Pool</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B87] to-[#78BE20] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Compete for a total prize pool of ₹65,000 and gain recognition for your innovative solutions.
          </p>
        </div>

        <div className="mx-auto">
          {/* Prize Pool Section */}
          <div className="flex flex-wrap justify-center gap-6 pb-8">
            {/* First Place - Gold */}
            <div className="relative p-1 rounded-2xl transform transition duration-300 hover:scale-105 max-w-xs w-full shadow-lg shadow-yellow-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 animate-pulse rounded-2xl"></div>
              <div className="relative bg-slate-900 rounded-xl p-6 h-full">
                <div className="flex flex-col items-center">
                  <Trophy className="h-16 w-16 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-1">1st Prize</h3>
                  <div className="text-yellow-400 text-3xl font-bold mb-3">₹25,000</div>
                </div>
              </div>
            </div>

            {/* Second Place - Silver */}
            <div className="relative p-1 rounded-2xl transform transition duration-300 hover:scale-105 max-w-xs w-full shadow-lg shadow-gray-400/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse rounded-2xl"></div>
              <div className="relative bg-slate-900 rounded-xl p-6 h-full">
                <div className="flex flex-col items-center">
                  <Award className="h-14 w-14 text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-1">2nd Prize</h3>
                  <div className="text-gray-300 text-2xl font-bold mb-3">₹15,000</div>
                </div>
              </div>
            </div>

            {/* Third Place - Bronze */}
            <div className="relative p-1 rounded-2xl transform transition duration-300 hover:scale-105 max-w-xs w-full shadow-lg shadow-amber-600/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 animate-pulse rounded-2xl"></div>
              <div className="relative bg-slate-900 rounded-xl p-6 h-full">
                <div className="flex flex-col items-center">
                  <Medal className="h-14 w-14 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-1">3rd Prize</h3>
                  <div className="text-amber-500 text-2xl font-bold mb-3">₹10,000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Mentions */}
          <div className="mt-10 p-6 bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-2xl border border-[#78BE20]/30 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-6 text-center">Additional Prizes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 rounded-lg border border-[#78BE20]/30">
                <div className="font-semibold text-[#78BE20] mb-1">4th & 5th Place (Consolation)</div>
                <div className="text-gray-300">₹5,000 × 2</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 rounded-lg border border-[#78BE20]/30">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="h-4 w-4 text-[#78BE20]" />
                  <div className="font-semibold text-[#78BE20]">IEEE Society Challenge Award</div>
                </div>
                <div className="text-gray-300">₹5,000</div>
              </div>
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Ready to Accept the Challenge?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-3 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
