import React from 'react';

const SponsorsSection: React.FC = () => {
  const sponsors = [
    {
      name: "BMSIT&M",
      logo: "https://imagizer.imageshack.com/img922/8858/quoUee.png",
    },
    {
      name: "IEEE BMSIT STB",
      logo: "https://imagizer.imageshack.com/img922/5916/bPX6yo.jpg",
    },
    {
      name: "IEEE SPS BANGALORE CHAPTER",
      logo: "https://imagizer.imageshack.com/img922/4906/SqkKwK.jpg", 
    },
    {
      name: "IEEE BANGLORE SECTION",
      logo: "https://live.staticflickr.com/65535/54543935199_b36c7d9072_z.jpg",
    },
    {
      name: "INSTITUTION INOVATION COUNCIL",
      logo: "https://imagizer.imageshack.com/img922/8859/DTw5Tv.png",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-[#004B87]/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            In <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">
              Collaboration
            </span> With
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#004B87] to-[#78BE20] mx-auto mb-6 md:mb-8"></div>
        </div>

        {/* Desktop: Inverted pyramid layout */}
        <div className="hidden md:block max-w-5xl mx-auto">
          {/* First row - 3 sponsors */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {sponsors.slice(0, 3).map((sponsor, index) => (
              <div key={index} className="w-full h-64">
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
          
          {/* Second row - 2 sponsors centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-xl w-full">
              {sponsors.slice(3, 5).map((sponsor, index) => (
                <div key={index + 3} className="w-full h-64">
                  <SponsorCard sponsor={sponsor} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Two columns layout */}
        <div className="md:hidden max-w-md mx-auto">
          {/* First row - 2 sponsors */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {sponsors.slice(0, 2).map((sponsor, index) => (
              <div key={index} className="w-full h-48">
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
          
          {/* Second row - 2 sponsors */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {sponsors.slice(2, 4).map((sponsor, index) => (
              <div key={index + 2} className="w-full h-48">
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
          
          {/* Third row - 1 sponsor centered */}
          <div className="flex justify-center">
            <div className="w-full h-48 max-w-[200px]">
              <SponsorCard sponsor={sponsors[4]} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes border-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

const SponsorCard: React.FC<{ sponsor: any }> = ({ sponsor }) => {
  return (
    <div className="relative group h-full">
      {/* Moving border effect */}
      <div className="absolute -inset-1 rounded-xl opacity-100">
        <div 
          className="w-full h-full rounded-xl"
          style={{
            background: 'linear-gradient(45deg, #004B87, #78BE20, #004B87, #78BE20)',
            backgroundSize: '400% 400%',
            animation: 'border-move 3s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      <div className="relative bg-white rounded-xl h-full flex items-center justify-center transform transition-all duration-300 hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#004B87]/20 overflow-hidden p-4">
        {/* Logo container */}
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/150';
            }}
          />
        </div>
        
        {/* Full name overlay on hover */}
        <div className="absolute inset-0 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-800 text-center">
            {sponsor.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
