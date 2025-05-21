import { useEffect } from "react";
import { Link } from "react-router-dom";

export const AboutEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 relative text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold leading-tight tracking-tight">
            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500">Industrial Visit</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            An experiential journey to discover how ideas evolve into innovations in real tech environments.
          </p>
          <div className="mt-4 h-1 w-28 mx-auto bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full"></div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">🔍 Inside the Tech World</h3>
            <p className="text-gray-300">
              Get exclusive behind-the-scenes access to innovation labs, R&D centers, and startup incubators where real technology is born and tested.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all">
            <h3 className="text-xl font-semibold text-fuchsia-300 mb-4">💼 Industry Interaction</h3>
            <p className="text-gray-300">
              Speak directly with developers, product managers, and team leads. Understand what it's really like to work in high-paced tech environments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-pink-500/20 hover:border-pink-400/40 transition-all">
            <h3 className="text-xl font-semibold text-pink-300 mb-4">🚀 Applied Learning</h3>
            <p className="text-gray-300">
              Learn how technologies like AI, cloud, and DevOps are being applied across industries, and how teams collaborate on real-world problem-solving.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all">
            <h3 className="text-xl font-semibold text-indigo-300 mb-4">🎯 The Bigger Picture</h3>
            <p className="text-gray-300">
              Discover how businesses make tech-driven decisions, manage agile workflows, and scale operations globally from India’s top tech parks.
            </p>
          </div>
        </div>

        {/* Timeline Style Flow */}
        <div className="max-w-5xl mx-auto mb-24 pt-24">
          <h3 className="text-3xl font-bold text-center mb-10 text-fuchsia-300">🗺️ Visit Flow</h3>
          <div className="space-y-10 border-l-2 border-fuchsia-600/30 pl-6">
            <div>
              <h4 className="text-lg text-fuchsia-400 font-semibold">1. Welcome & Briefing</h4>
              <p className="text-slate-400">Kick off with a company overview and breakdown of their core tech stack and mission.</p>
            </div>
            <div>
              <h4 className="text-lg text-purple-400 font-semibold">2. Facility Tour</h4>
              <p className="text-slate-400">Walkthrough of engineering departments, dev clusters, and live ops zones.</p>
            </div>
            <div>
              <h4 className="text-lg text-pink-400 font-semibold">3. Live Demos</h4>
              <p className="text-slate-400">Watch how products are developed, deployed, and scaled — in real time.</p>
            </div>
            <div>
              <h4 className="text-lg text-indigo-400 font-semibold">4. Networking & Insights</h4>
              <p className="text-slate-400">Engage in open Q&A, grab actionable career insights, and build industry connections.</p>
            </div>
          </div>
        </div>

        {/* Who Should Attend */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-indigo-200">👥 Ideal For</h3>
          <p className="text-gray-400">
            Engineering students, early-stage innovators, or anyone curious about how today’s tech giants operate and create impact.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/register"
            className="inline-block px-12 py-4 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white rounded-full text-lg font-semibold hover:from-fuchsia-700 hover:to-indigo-700 transition-all shadow-2xl hover:shadow-purple-500/40 transform hover:scale-105"
          >
            Join the Visit – Register Now 🚀
          </Link>
        </div>
      </div>
    </section>
  );
};
