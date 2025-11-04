'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Exhibition } from '@/types';

interface ExhibitionCardProps {
  exhibition: Exhibition;
  featured?: boolean;
}

export default function ExhibitionCard({ exhibition, featured = false }: ExhibitionCardProps) {
  const typeColors = {
    solo: 'bg-akakce-red',
    group: 'bg-akakce-cyan',
    biennial: 'bg-akakce-magenta',
    public: 'bg-akakce-lime',
  };

  const typeColor = typeColors[exhibition.type];

  return (
    <Link 
      href={`/exhibitions/${exhibition.slug}`} 
      className={`group block ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 card-hover">
        {/* Image */}
        <div className={`relative ${featured ? 'aspect-[21/9]' : 'aspect-[16/9]'}`}>
          <Image
            src={exhibition.images[0]}
            alt={exhibition.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Type badge */}
          <div className="absolute top-3 right-3">
            <span className={`${typeColor} text-white px-3 py-1 text-xs font-bold uppercase rounded-full`}>
              {exhibition.type}
            </span>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-medium uppercase tracking-wide mb-2">
                {exhibition.city}, {exhibition.country} • {exhibition.year}
              </p>
              <h3 className="font-bold text-2xl mb-2">{exhibition.title}</h3>
              <p className="text-sm opacity-90">{exhibition.venue}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
