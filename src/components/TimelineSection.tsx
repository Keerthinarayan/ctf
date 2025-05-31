import React, { useRef, useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Award, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const TimelineSection: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.top + rect.height > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.6 + rect.height)));
        setLineHeight(scrollProgress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineEvents = [
    {
      date: "June 12, 2025",
      time: "9:00 AM - 5:00 PM",
      title: "Industrial Visit",
      description: "Enjoy a unique opportunity to explore the workings of a Center for Brain Research,IISc  engage with experts and reaserchers ",
      icon: <MapPin className="h-6 w-6" />,
      location: "Centre for Brain Research, IISC Bangalore",
      buttons: [
        {
          text: "Know More",
          link: "/industrial-visit",
          primary: false
        },
        {
          text: "Register",
          link: "/register",
          primary: true
        }
      ]
    },
    {
      date: "June 13 - 14, 2025",
      time: "10:00 AM - 10:00 AM",
      title: "CAPTURE THE SIGNAL 2.0",
      description: "Gear up for a 24-hour overnight showdown of innovative puzzles, fierce battles, and nonstop eliminations. Only the sharpest survive!",
      icon: <Calendar className="h-6 w-6" />,
      location: "APJ Abdul Kalam LAB, BMSIT&M",
      buttons: [
        {
          text: "Know More",
          link: "/ctf",
          primary: false
        },
        {
          text: "Register",
          link: "/register",
          primary: true
        }
      ]
    },
    {
      date: "June 14, 2025",
      time: "10:00 AM - 12:00 PM",
      title: "Finale and Prize Distribution",
      description: "Join us for the exciting finale as we announce the showdown champions and hand out the prizes, and recognition awards",
      icon: <Award className="h-6 w-6" />,
      location: "BSN Auditorium, BMSIT"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-[#004B87]/20 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Event <span className="bg-gradient-to-r from-[#004B87] to-[#78BE20] bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004B87] to-[#78BE20] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Join us for three days of innovation, learning, and competition
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline line - only visible on desktop */}
          {!isMobile && (
            <>
              <div className="absolute left-1/2 -ml-px w-0.5 bg-gray-700/30 hidden md:block" 
                   style={{ top: '40px', height: 'calc(100% - 200px)' }}></div>
              <div className="absolute left-1/2 -ml-px w-0.5 bg-gradient-to-b from-[#004B87] to-[#78BE20] hidden md:block transition-all duration-300 ease-out"
                   style={{ top: '40px', height: `${(lineHeight / 100) * (timelineRef.current?.offsetHeight ? timelineRef.current.offsetHeight - 200 : 0)}px` }}></div>
            </>
          )}

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - only visible on desktop */}
                {!isMobile && (
                  <div className="hidden md:block absolute left-1/2 -ml-3 mt-10 w-6 h-6 rounded-full border-4 border-[#78BE20] bg-slate-900 z-10 shadow-lg shadow-[#78BE20]/50"></div>
                )}

                {/* Mobile layout is a vertical stack */}
                <div className={`md:flex items-center ${isMobile ? '' : index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${isMobile ? 'mb-4' : index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="p-6 bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-2xl border border-[#78BE20]/30 shadow-xl transform transition-all hover:scale-[1.02] group">
                      {/* Mobile date badge */}
                      {isMobile && (
                        <div className="inline-flex items-center bg-[#004B87]/20 px-4 py-2 rounded-full mb-4">
                          {event.icon}
                          <span className="ml-2 text-[#78BE20] font-semibold">{event.date}</span>
                        </div>
                      )}

                      {/* Desktop date */}
                      {!isMobile && (
                        <div className="flex items-center justify-center md:justify-start mb-4">
                          <div className="text-[#78BE20] flex items-center">
                            {event.icon}
                            <span className="ml-2 text-lg font-semibold">{event.date}</span>
                          </div>
                        </div>
                      )}

                      <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      
                      {/* Event details */}
                      <div className={`flex items-center text-gray-400 text-sm mb-4 ${isMobile ? 'flex-col items-start space-y-2' : ''}`}>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{event.time}</span>
                        </div>
                        {event.location && (
                          <>
                            {!isMobile && <span className="mx-2">•</span>}
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{event.location}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Action buttons */}
                      {event.buttons && (
                        <div className={`flex gap-4 ${isMobile ? 'flex-col' : 'justify-center md:justify-start'}`}>
                          {event.buttons.map((button, buttonIndex) => (
                            <Link
                              key={buttonIndex}
                              to={button.link}
                              className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 text-center ${
                                button.primary
                                  ? 'bg-gradient-to-r from-[#004B87] to-[#78BE20] text-white hover:from-[#003a69] hover:to-[#62991a]'
                                  : 'border border-[#78BE20] text-[#78BE20] hover:bg-[#78BE20]/10'
                              }`}
                            >
                              {button.text}
                              {!button.primary && <LinkIcon className="inline ml-2 h-4 w-4" />}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
