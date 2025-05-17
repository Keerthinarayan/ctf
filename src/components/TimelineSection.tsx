import React from 'react';
import { Calendar, Clock, MapPin, Award } from 'lucide-react';

interface TimelineEvent {
  date: string;
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  location?: string;
}

const TimelineSection: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      date: "June 12, 2025",
      time: "9:00 AM - 5:00 PM",
      title: "Industrial Visit",
      description: "Explore top tech companies and gain industry insights through interactive sessions with experts.",
      icon: <MapPin className="h-6 w-6" />,
      location: "Tech Park Campus"
    },
    {
      date: "June 13, 2025",
      time: "10:00 AM - 4:00 PM",
      title: "Round 1: Problem Analysis",
      description: "Teams begin their hackathon journey with problem statements and initial ideation phase.",
      icon: <Calendar className="h-6 w-6" />,
      location: "IEEE SPS Hall A"
    },
    {
      date: "June 13, 2025",
      time: "5:00 PM - 8:00 AM (Next Day)",
      title: "Round 2: Development Sprint",
      description: "The intensive overnight coding session where teams bring their ideas to life through rapid development.",
      icon: <Clock className="h-6 w-6" />,
      location: "IEEE SPS Main Campus"
    },
    {
      date: "June 14, 2025",
      time: "8:00 AM - 12:00 PM",
      title: "Round 3: Final Presentations",
      description: "Teams present their completed solutions to the judges panel, followed by evaluation and selection.",
      icon: <Award className="h-6 w-6" />,
      location: "IEEE SPS Auditorium"
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Event <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            The DecodeX hackathon spans three days of intensive activities, including an industrial visit and a 24-hour coding challenge.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-600 hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -ml-3 mt-10 w-6 h-6 rounded-full border-4 border-indigo-500 bg-slate-900 z-10"></div>

                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Date section */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl mb-6 md:mb-0">
                      <div className="flex items-center justify-center md:justify-start mb-4 text-indigo-400">
                        {event.icon}
                        <span className="ml-2 text-lg font-semibold">{event.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                      <p className="text-gray-300 mb-2">{event.description}</p>
                      <div className="flex items-center text-gray-400 text-sm">
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
                    </div>
                  </div>

                  {/* Empty section for layout */}
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