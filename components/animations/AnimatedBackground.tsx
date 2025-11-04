'use client';

import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'hero' | 'subtle';
}

export default function AnimatedBackground({ variant = 'default' }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add any additional JavaScript-based animations here if needed
  }, []);

  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" ref={canvasRef}>
        {/* Large floating blobs */}
        <div className="shape-blob w-96 h-96 bg-akakce-red top-20 -left-48" style={{ animationDelay: '0s' }} />
        <div className="shape-blob w-80 h-80 bg-akakce-cyan top-40 right-10" style={{ animationDelay: '2s' }} />
        <div className="shape-blob w-72 h-72 bg-akakce-lime bottom-20 left-20" style={{ animationDelay: '4s' }} />
        <div className="shape-blob w-64 h-64 bg-akakce-magenta bottom-40 right-40" style={{ animationDelay: '1s' }} />
        
        {/* Animated SVG lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0,200 Q 200,100 400,200 T 800,200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            className="draw-line"
            opacity="0.2"
          />
          <circle
            cx="50%"
            cy="50%"
            r="150"
            fill="none"
            stroke="black"
            strokeWidth="1"
            className="animate-pulse-slow"
            opacity="0.1"
          />
          <circle
            cx="50%"
            cy="50%"
            r="250"
            fill="none"
            stroke="black"
            strokeWidth="1"
            className="animate-pulse-slow"
            opacity="0.1"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" ref={canvasRef}>
        <div className="shape-blob w-64 h-64 bg-akakce-cyan/30 top-10 right-10" style={{ animationDelay: '0s' }} />
        <div className="shape-blob w-48 h-48 bg-akakce-orange/30 bottom-10 left-10" style={{ animationDelay: '2s' }} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" ref={canvasRef}>
      <div className="shape-blob w-72 h-72 bg-akakce-red/50 top-20 right-20" style={{ animationDelay: '0s' }} />
      <div className="shape-blob w-64 h-64 bg-akakce-magenta/50 bottom-20 left-20" style={{ animationDelay: '3s' }} />
    </div>
  );
}
