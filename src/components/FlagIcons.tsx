interface FlagProps {
  className?: string;
}

const STAR_PATH =
  "M0,-1 L0.225,-0.309 L0.951,-0.309 L0.363,0.118 L0.588,0.809 L0,0.382 L-0.588,0.809 L-0.363,0.118 L-0.951,-0.309 L-0.225,-0.309 Z";

const EU_STAR_POSITIONS = Array.from({ length: 12 }, (_, i) => {
  const angle = ((-90 + 30 * i) * Math.PI) / 180;
  return { x: 1.5 + 0.62 * Math.cos(angle), y: 1 + 0.62 * Math.sin(angle) };
});

export function FlagDE({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 5 3" className={className} role="img" aria-label="Deutschland">
      <rect width="5" height="1" y="0" fill="#000000" />
      <rect width="5" height="1" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

export function FlagCH({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label="Schweiz">
      <rect width="32" height="32" fill="#FF0000" />
      <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" />
      <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" />
    </svg>
  );
}

export function FlagEU({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 3 2" className={className} role="img" aria-label="Europa">
      <rect width="3" height="2" fill="#003399" />
      {EU_STAR_POSITIONS.map((pos, i) => (
        <g key={i} transform={`translate(${pos.x} ${pos.y}) scale(0.16)`}>
          <path d={STAR_PATH} fill="#FFCC00" />
        </g>
      ))}
    </svg>
  );
}
