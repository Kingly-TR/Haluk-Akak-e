'use client';

import { useState } from 'react';
import ExhibitionCard from '@/components/ui/ExhibitionCard';
import AnimatedBackground from '@/components/animations/AnimatedBackground';
import { exhibitions } from '@/data/exhibitions';

export default function ExhibitionsPage() {
  const [filter, setFilter] = useState<string>('all');
  
  const types = [
    { value: 'all', label: 'All Exhibitions' },
    { value: 'solo', label: 'Solo' },
    { value: 'group', label: 'Group' },
    { value: 'biennial', label: 'Biennials' },
    { value: 'public', label: 'Public Projects' },
  ];

  const filteredExhibitions = filter === 'all' 
    ? exhibitions 
    : exhibitions.filter(e => e.type === filter);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative section bg-gradient-to-b from-gray-50 to-white">
        <AnimatedBackground variant="subtle" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            Exhibitions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive archive of solo exhibitions, group shows, biennials, and public 
            projects spanning Haluk Akakçe&apos;s illustrious career.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-wrap gap-3">
            {types.map(type => (
              <button
                key={type.value}
                onClick={() => setFilter(type.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-all ${
                  filter === type.value
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions Grid */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-sm text-gray-600">
            Showing {filteredExhibitions.length} {filteredExhibitions.length === 1 ? 'exhibition' : 'exhibitions'}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredExhibitions.map(exhibition => (
              <ExhibitionCard 
                key={exhibition.id} 
                exhibition={exhibition} 
                featured={exhibition.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
