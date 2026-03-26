type LogoProps = {
  className?: string;
};

export function LogoCS({ className = "" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Logo CybSec"
      role="img"
    >
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="20"
        stroke="rgba(255,255,255,0.15)"
      />

      <path
        d="M65 30C55 20 35 25 35 50C35 75 55 80 65 70"
        stroke="#22d3ee"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M55 35C70 35 70 50 50 50C30 50 30 65 45 65"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}