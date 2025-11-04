'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Artwork } from '@/types';

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link href={`/works/${artwork.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 card-hover">
        {/* Image */}
        <div className="aspect-[4/5] relative">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Hover overlay with animated shapes */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
              <p className="text-sm opacity-90">{artwork.year} • {artwork.medium}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Info below image */}
      <div className="mt-3">
        <h3 className="font-bold text-sm uppercase tracking-wide">{artwork.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{artwork.year}</p>
      </div>
    </Link>
  );
}
