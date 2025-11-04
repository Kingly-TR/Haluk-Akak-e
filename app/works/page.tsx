'use client';

import { useState } from 'react';
import ArtworkCard from '@/components/ui/ArtworkCard';
import AnimatedBackground from '@/components/animations/AnimatedBackground';
import { artworks } from '@/data/artworks';

export default function WorksPage() {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = [
    { value: 'all', label: 'All Works' },
    { value: 'painting', label: 'Paintings' },
    { value: 'drawing', label: 'Drawings' },
    { value: 'video', label: 'Video & Film' },
    { value: 'installation', label: 'Installations' },
    { value: 'public-project', label: 'Public Projects' },
  ];

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(a => a.category === filter);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative section bg-gradient-to-b from-gray-50 to-white">
        <AnimatedBackground variant="subtle" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive archive of paintings, drawings, video installations, and public 
            projects exploring the intersection of technology, perception, and the body.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-all ${
                  filter === cat.value
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-sm text-gray-600">
            Showing {filteredArtworks.length} {filteredArtworks.length === 1 ? 'work' : 'works'}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredArtworks.map(artwork => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
