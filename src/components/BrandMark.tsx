// Small hex-cube brand mark inspired by the firm profile PDF
const BrandMark = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <polygon points="12,4 22,10 22,22 12,28 2,22 2,10" fill="hsl(var(--navy))" />
    <polygon points="26,10 36,16 36,28 26,34 16,28 16,16" fill="hsl(var(--muted))" opacity="0.85" />
  </svg>
);

export default BrandMark;
