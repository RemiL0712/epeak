export default function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none">
      <path
        d="M10 46 24 30l8 8 10-14 12 22H10Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M32 24V7m0 0-5 5m5-5 5 5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m16 46 8-8 6 8m8 0-6-7-6 7" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  );
}
