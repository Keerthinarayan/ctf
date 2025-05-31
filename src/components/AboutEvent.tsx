import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Terminal, FileText } from "lucide-react";

export const AboutEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const documents = [
    {
      title: "Code of Conduct",
      description: "Guidelines for participant behavior and ethics",
      icon: <Shield className="h-6 w-6" />,
      link: "https://drive.google.com/file/d/1dh6W9r7SCb6tSCvzXiNtPJR7s8gaXRQw/view" 
    },
    {
      title: "Event Flow",
      description: "Detailed schedule and round progression",
      icon: <Terminal className="h-6 w-6" />,
      link: "https://drive.google.com/file/d/1CFgQheYTO87QwJWLGGRVSAt5FDvIplxM/view"
    },
    {
      title: "Registration Agreement",
      description: "Terms and conditions for participation",
      icon: <FileText className="h-6 w-6" />,
      link: "https://drive.google.com/file/d/1eBlJuojRuf2IF9W5BNuJ1ZTe_iwHfH03/view" 
    }
  ];

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

        {/* Important Documents Section - Now after Visit Flow */}
        <div className="container mx-auto px-4 pt-16 pb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Important Documents
            </span>
          </h2>
          {/* Instructional Note */}
          <p className="text-center text-sm text-gray-400 mb-6">
            (Please select a document below to view or download it.)
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">      
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-xl p-6 border border-[#78BE20]/30 shadow-xl hover:scale-105 transition-transform group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#004B87]/20 flex items-center justify-center mb-4 group-hover:bg-[#78BE20]/20 transition-colors">
                      <div className="text-[#78BE20]">{doc.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                    <p className="text-sm text-gray-400">{doc.description}</p>
                  </div>
                </a>
              ))}
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
