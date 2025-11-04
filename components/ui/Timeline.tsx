'use client';

import { TimelineEvent } from '@/types';

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const typeIcons = {
    education: '🎓',
    exhibition: '🎨',
    award: '🏆',
    project: '✨',
    milestone: '⭐',
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-akakce-red via-akakce-magenta to-akakce-cyan" />
      
      {/* Timeline events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-20">
            {/* Year marker */}
            <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center font-bold text-lg">
              {event.year}
            </div>
            
            {/* Icon */}
            <div className="absolute left-16 top-0 text-2xl">
              {typeIcons[event.type]}
            </div>
            
            {/* Content */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">{event.title}</h3>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
              <span className="inline-block mt-3 text-xs font-bold uppercase tracking-wide text-gray-400">
                {event.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
