import React from 'react';
import { Calendar, Clock, MapPin, Award, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const TimelineSection: React.FC = () => {
  const timelineEvents = [
    {
      date: "June 12, 2025",
      time: "9:00 AM - 5:00 PM",
      title: "Industrial Visit",
      description: "Explore top tech companies and gain industry insights through interactive sessions with experts.",
      icon: <MapPin className="h-6 w-6" />,
      location: "Tech Park Campus",
      buttons: [
        {
          text: "Know More",
          link: "/aboutevent",
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
      date: "June 13, 2025",
      time: "10:00 AM - 10:00 PM",
      title: "CTF Competition",
      description: "Engage in our signature Capture The Flag competition with challenging problems across multiple categories.",
      icon: <Calendar className="h-6 w-6" />,
      location: "IEEE SPS Hall A",
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
      time: "11:00 AM - 2:00 PM",
      title: "Finale and Prize Distribution",
      description: "Closing ceremony featuring project presentations, winner announcements, and prize distribution.",
      icon: <Award className="h-6 w-6" />,
      location: "IEEE SPS Auditorium"
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

        <div className="relative">
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gradient-to-b from-[#004B87] to-[#78BE20] hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute left-1/2 -ml-3 mt-10 w-6 h-6 rounded-full border-4 border-[#78BE20] bg-slate-900 z-10 shadow-lg shadow-[#78BE20]/50"></div>

                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="p-6 bg-gradient-to-br from-slate-800/80 to-[#004B87]/20 backdrop-blur-sm rounded-2xl border border-[#78BE20]/30 shadow-xl mb-6 md:mb-0 transform transition-all hover:scale-[1.02] group">
                      <div className="flex items-center justify-center md:justify-start mb-4">
                        <div className="text-[#78BE20] flex items-center">
                          {event.icon}
                          <span className="ml-2 text-lg font-semibold">{event.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <div className="flex items-center text-gray-400 text-sm mb-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{event.time}</span>
                        {event.location && (
                          <>
                            <span className="mx-2">•</span>
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{event.location}</span>
                          </>
                        )}
                      </div>
                      {event.buttons && (
                        <div className="flex gap-4 justify-center md:justify-start">
                          {event.buttons.map((button, buttonIndex) => (
                            <Link
                              key={buttonIndex}
                              to={button.link}
                              className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
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
