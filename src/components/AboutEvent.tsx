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
              Center for Brain Research
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            An immersive journey into cutting-edge neuroscience research at IISc Bangalore, where the mysteries of the brain are unraveled.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
            <h3 className="text-xl font-semibold text-[#78BE20] mb-3">🧠 Neural Engineering Labs</h3>
            <p className="text-gray-400">
              Explore cutting-edge laboratories where brain-computer interfaces, neural prosthetics, and biomedical devices are engineered and tested.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
            <h3 className="text-xl font-semibold text-[#78BE20] mb-3">⚙️ Technology Integration</h3>
            <p className="text-gray-400">
              See how engineers collaborate with neuroscientists to build advanced imaging systems, signal processing algorithms, and computational models.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
            <h3 className="text-xl font-semibold text-[#78BE20] mb-3">💻 AI & Brain Computing</h3>
            <p className="text-gray-400">
              Discover how machine learning, deep neural networks, and embedded systems are revolutionizing brain research and medical technology.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
            <h3 className="text-xl font-semibold text-[#78BE20] mb-3">🔧 Engineering Applications</h3>
            <p className="text-gray-400">
              Learn about career opportunities in biomedical engineering, neuroengineering, and how technical skills apply to healthcare innovation.
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
              <h4 className="text-xl font-semibold text-white mb-2">1. Welcome & Introduction</h4>
              <p className="text-gray-400">Introduction to the Center for Brain Research, its mission, and current breakthrough research projects.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h4 className="text-xl font-semibold text-white mb-2">2. Engineering Labs Tour</h4>
              <p className="text-gray-400">Walk through biomedical engineering labs, signal processing units, and brain-computer interface development facilities.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h4 className="text-xl font-semibold text-white mb-2">3. Technology Demonstrations</h4>
              <p className="text-gray-400">Live demos of neural signal acquisition systems, machine learning models for brain data, and medical device prototypes.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl">
              <h4 className="text-xl font-semibold text-white mb-2">4. Career & Technical Insights</h4>
              <p className="text-gray-400">Engineering career pathways in biomedical tech, startup opportunities, and hands-on technical skills needed in neuroengineering.</p>
            </div>
          </div>
        </div>

        {/* Who Should Attend */}
        <div className="max-w-4xl mx-auto text-center py-12">
          <h3 className="text-3xl font-bold mb-4 text-white">👥 Ideal For</h3>
          <p className="text-gray-400">
            Engineering students from all disciplines - Computer Science, Electronics, Biomedical, Mechanical - interested in the intersection of technology and brain research.
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
