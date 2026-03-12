import React, { useEffect, useRef } from 'react';

interface Pen {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  swayAmount: number;
}

const generatePens = (count: number): Pen[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 8 + Math.random() * 10,
    size: 18 + Math.random() * 22,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 180,
    opacity: 0.35 + Math.random() * 0.45,
    swayAmount: 30 + Math.random() * 60,
  }));

const PENS = generatePens(18);

// SVG of a graphic tablet stylus pen
const PenSVG: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size * 0.28}
    height={size}
    viewBox="0 0 14 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Pen tip nib */}
    <polygon points="7,50 4,42 10,42" fill="#c084fc" opacity="0.9" />
    {/* Pen body */}
    <rect x="3.5" y="10" width="7" height="32" rx="2" fill="#8c59e4" />
    {/* Pen top button accent */}
    <rect x="3.5" y="7" width="7" height="4" rx="1" fill="#a78bfa" />
    {/* Grip texture lines */}
    <rect x="3.5" y="30" width="7" height="1.5" rx="0.7" fill="#6d28d9" opacity="0.6" />
    <rect x="3.5" y="33" width="7" height="1.5" rx="0.7" fill="#6d28d9" opacity="0.6" />
    <rect x="3.5" y="36" width="7" height="1.5" rx="0.7" fill="#6d28d9" opacity="0.6" />
    {/* Pen top eraser */}
    <rect x="4" y="2" width="6" height="6" rx="2" fill="#ddd6fe" />
    {/* Highlight shimmer */}
    <rect x="5" y="12" width="1.5" height="18" rx="0.75" fill="white" opacity="0.15" />
  </svg>
);

export const FallingPens: React.FC = () => {
  const styleId = 'falling-pens-style';

  useEffect(() => {
    if (document.getElementById(styleId)) return;

    const css = PENS.map((pen) => {
      const sway = pen.swayAmount;
      return `
        @keyframes fall-${pen.id} {
          0%   { transform: translateY(-80px) translateX(0px) rotate(${pen.rotation}deg); opacity: 0; }
          5%   { opacity: ${pen.opacity}; }
          50%  { transform: translateY(50vh) translateX(${sway}px) rotate(${pen.rotation + pen.rotationSpeed * 0.5}deg); }
          95%  { opacity: ${pen.opacity}; }
          100% { transform: translateY(110vh) translateX(${sway * 0.3}px) rotate(${pen.rotation + pen.rotationSpeed}deg); opacity: 0; }
        }
      `;
    }).join('\n');

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);

    return () => {
      document.getElementById(styleId)?.remove();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    >
      {PENS.map((pen) => (
        <div
          key={pen.id}
          style={{
            position: 'absolute',
            left: `${pen.x}%`,
            top: 0,
            animation: `fall-${pen.id} ${pen.duration}s ${pen.delay}s ease-in-out infinite`,
            willChange: 'transform, opacity',
          }}
        >
          <PenSVG size={pen.size} />
        </div>
      ))}
    </div>
  );
};
