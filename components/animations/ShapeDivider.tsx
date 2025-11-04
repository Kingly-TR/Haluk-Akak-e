'use client';

interface ShapeDividerProps {
  variant?: 'waves' | 'diagonal' | 'circles';
  color?: string;
  flip?: boolean;
}

export default function ShapeDivider({ variant = 'waves', color = '#ffffff', flip = false }: ShapeDividerProps) {
  const transform = flip ? 'rotate(180deg)' : 'none';

  if (variant === 'diagonal') {
    return (
      <div className="relative w-full h-16 md:h-24" style={{ transform }}>
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 120V0h1200z" fill={color} />
        </svg>
      </div>
    );
  }

  if (variant === 'circles') {
    return (
      <div className="relative w-full h-16 md:h-24 overflow-hidden" style={{ transform }}>
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <circle cx="200" cy="80" r="40" fill={color} opacity="0.7" />
          <circle cx="400" cy="60" r="50" fill={color} opacity="0.5" />
          <circle cx="600" cy="90" r="35" fill={color} opacity="0.8" />
          <circle cx="800" cy="70" r="45" fill={color} opacity="0.6" />
          <circle cx="1000" cy="85" r="38" fill={color} opacity="0.7" />
          <rect x="0" y="100" width="1200" height="20" fill={color} />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-16 md:h-24" style={{ transform }}>
      <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color} />
      </svg>
    </div>
  );
}
