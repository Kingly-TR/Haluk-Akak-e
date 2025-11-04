'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ArtTile {
  id: number;
  image: string;
  clipPath: string;
  clipPathHover: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size: {
    width: string;
    height: string;
  };
  zIndex: number;
}

export default function HeroCollage() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  // Art tiles with different diagonal/slash shapes - using actual Haluk Akakçe artworks
  const artTiles: ArtTile[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800', // Digital Landscape 01
      clipPath: 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)',
      clipPathHover: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
      position: { top: '5%', left: '5%' },
      size: { width: '22vw', height: '28vh' },
      zIndex: 3,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800', // Cosmic Body
      clipPath: 'polygon(0 0, 100% 12%, 100% 100%, 0 88%)',
      clipPathHover: 'polygon(0 0, 100% 8%, 100% 100%, 0 92%)',
      position: { top: '12%', right: '8%' },
      size: { width: '20vw', height: '25vh' },
      zIndex: 2,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800', // Perception Series 07
      clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
      clipPathHover: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
      position: { bottom: '15%', left: '8%' },
      size: { width: '24vw', height: '30vh' },
      zIndex: 4,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800', // Biomorphic Circuits
      clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)',
      clipPathHover: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)',
      position: { top: '40%', left: '15%' },
      size: { width: '18vw', height: '22vh' },
      zIndex: 1,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800', // The Sky is the Limit
      clipPath: 'polygon(0 0, 90% 10%, 100% 100%, 10% 90%)',
      clipPathHover: 'polygon(0 0, 95% 5%, 100% 100%, 5% 95%)',
      position: { top: '8%', left: '35%' },
      size: { width: '20vw', height: '26vh' },
      zIndex: 5,
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800', // Radiant Networks
      clipPath: 'polygon(15% 0, 100% 8%, 85% 100%, 0 92%)',
      clipPathHover: 'polygon(10% 0, 100% 5%, 90% 100%, 0 95%)',
      position: { bottom: '10%', right: '12%' },
      size: { width: '22vw', height: '28vh' },
      zIndex: 2,
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
      clipPath: 'polygon(0 5%, 95% 0, 100% 95%, 5% 100%)',
      clipPathHover: 'polygon(0 2%, 98% 0, 100% 98%, 2% 100%)',
      position: { top: '35%', right: '18%' },
      size: { width: '19vw', height: '24vh' },
      zIndex: 3,
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1551732998-9c98c5bb9927?w=800',
      clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)',
      clipPathHover: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
      position: { bottom: '25%', right: '35%' },
      size: { width: '16vw', height: '20vh' },
      zIndex: 1,
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800', // Digital Landscape (duplicate for variety)
      clipPath: 'polygon(12% 0, 100% 5%, 88% 100%, 0 95%)',
      clipPathHover: 'polygon(8% 0, 100% 3%, 92% 100%, 0 97%)',
      position: { bottom: '5%', left: '2%' },
      size: { width: '20vw', height: '24vh' },
      zIndex: 2,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden flex items-center justify-center">
      {/* Art Tiles Collage */}
      <div className="absolute inset-0 hidden lg:block">
        {artTiles.map((tile) => (
          <div
            key={tile.id}
            className="absolute cursor-pointer transition-all duration-500 ease-out"
            style={{
              ...tile.position,
              ...tile.size,
              zIndex: hoveredTile === tile.id ? 20 : tile.zIndex,
            }}
            onMouseEnter={() => setHoveredTile(tile.id)}
            onMouseLeave={() => setHoveredTile(null)}
            aria-label={`Artwork tile ${tile.id}`}
            role="img"
          >
            <div
              className="w-full h-full bg-cover bg-center shadow-lg transition-all duration-500"
              style={{
                backgroundImage: `url(${tile.image})`,
                clipPath: hoveredTile === tile.id ? tile.clipPathHover : tile.clipPath,
                transform: hoveredTile === tile.id ? 'scale(1.04)' : 'scale(1)',
                filter: hoveredTile === tile.id ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Mobile: Minimal floating tiles - just 3 for clean look */}
      <div className="absolute inset-0 lg:hidden">
        {/* Top Right Tile */}
        <div
          className="absolute top-8 right-4 w-32 h-40 md:w-40 md:h-48"
          style={{
            clipPath: artTiles[0].clipPath,
            opacity: 0.3,
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${artTiles[0].image})`,
            }}
          />
        </div>
        
        {/* Bottom Left Tile */}
        <div
          className="absolute bottom-24 left-4 w-36 h-44 md:w-44 md:h-52"
          style={{
            clipPath: artTiles[2].clipPath,
            opacity: 0.3,
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${artTiles[2].image})`,
            }}
          />
        </div>
        
        {/* Center Background Tile - very subtle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-56 md:w-56 md:h-64"
          style={{
            clipPath: artTiles[4].clipPath,
            opacity: 0.15,
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${artTiles[4].image})`,
            }}
          />
        </div>
      </div>

      {/* Central Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Artist Name with Creative Scatter Effect */}
        <h1 className="mb-8 lg:mb-12">
          <span className="block text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight hero-name-enhanced">
            {'HALUK AKAKÇE'.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block transition-all duration-300 hover:scatter-letter"
                style={{
                  transitionDelay: `${index * 20}ms`,
                  '--random-x': `${Math.random() * 20 - 10}px`,
                  '--random-y': `${Math.random() * 20 - 10}px`,
                  '--random-rotate': `${Math.random() * 15 - 7.5}deg`,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = `translate(var(--random-x), var(--random-y)) rotate(var(--random-rotate)) scale(1.1)`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/works"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-black text-white rounded-full font-bold uppercase tracking-wide text-sm sm:text-base hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
          >
            Explore Works
          </Link>
          <Link
            href="/shop"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-black text-black rounded-full font-bold uppercase tracking-wide text-sm sm:text-base hover:bg-black hover:text-white transition-all hover:scale-105"
          >
            Shop New Editions
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm uppercase tracking-wider text-gray-600">Scroll</span>
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
