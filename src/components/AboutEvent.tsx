import { useEffect } from "react";
import { Link } from "react-router-dom";

export const AboutEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-[#004B87]/20 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Industrial Visit
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            An experiential journey to discover how ideas evolve into innovations in real tech environments.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
            <h3 className="text-xl font-semibold text-[#78BE20] mb-3">🔍 Inside the Tech World</h3>
            <p className="text-gray-400">
              Get exclusive behind-the-scenes access to innovation labs, R&D centers, and startup incubators where real technology is born and tested.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
            <h3 className="text-xl font-semibold text-[#78BE20] mb-3">💼 Industry Interaction</h3>
            <p className="text-gray-400">
              Speak directly with developers, product managers, and team leads. Understand what it's really like to work in high-paced tech environments.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
            <h3 className="text-xl font-semibold text-[#78BE20] mb-3">🚀 Applied Learning</h3>
            <p className="text-gray-400">
              Learn how technologies like AI, cloud, and DevOps are applied across industries, and how teams collaborate on real-world problem-solving.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
            <h3 className="text-xl font-semibold text-[#78BE20] mb-3">🎯 The Bigger Picture</h3>
            <p className="text-gray-400">
              Discover how businesses make tech-driven decisions, manage agile workflows, and scale operations globally from India’s top tech parks.
            </p>
          </div>
        </div>

        {/* Timeline Style Flow */}
        <div className="max-w-5xl mx-auto py-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Visit Flow
            </span>
          </h3>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h4 className="text-xl font-semibold text-white mb-2">1. Welcome & Briefing</h4>
              <p className="text-gray-400">Kick off with a company overview and breakdown of their core tech stack and mission.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h4 className="text-xl font-semibold text-white mb-2">2. Facility Tour</h4>
              <p className="text-gray-400">Walkthrough of engineering departments, dev clusters, and live ops zones.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h4 className="text-xl font-semibold text-white mb-2">3. Live Demos</h4>
              <p className="text-gray-400">Watch how products are developed, deployed, and scaled — in real time.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h4 className="text-xl font-semibold text-white mb-2">4. Networking & Insights</h4>
              <p className="text-gray-400">Engage in open Q&A, grab actionable career insights, and build industry connections.</p>
            </div>
          </div>
        </div>

        {/* Who Should Attend */}
        <div className="max-w-4xl mx-auto text-center py-12">
          <h3 className="text-3xl font-bold mb-4 text-white">👥 Ideal For</h3>
          <p className="text-gray-400">
            Engineering students, early-stage innovators, or anyone curious about how today’s tech giants operate and create impact.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white rounded-full hover:from-[#003a69] hover:to-[#62991a] transition-all shadow-lg hover:shadow-[#004B87]/20 transform hover:scale-105"
          >
            Join the Visit – Register Now 🚀
          </Link>
        </div>
      </div>
    </section>
  );
};