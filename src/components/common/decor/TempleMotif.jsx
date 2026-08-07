import styles from './TempleMotif.module.css'

// Simplified gopuram (temple tower) silhouette, thin outline only.
// Opacity is fully owned by the CSS pulse animation (kept within the 2-4% range).
export default function TempleMotif({ className = '', size = 260, color }) {
  return (
    <svg
      className={`${styles.temple} ${className}`}
      style={{ width: size, height: size * 0.9, color }}
      viewBox="0 0 200 180"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M100 8 L112 24 L88 24 Z" />
      <path d="M70 24 L130 24 L140 48 L60 48 Z" />
      <path d="M55 48 L145 48 L158 78 L42 78 Z" />
      <path d="M38 78 L162 78 L178 120 L22 120 Z" />
      <rect x="30" y="120" width="140" height="52" />
      <line x1="30" y1="140" x2="170" y2="140" />
      <circle cx="100" cy="16" r="3" />
    </svg>
  )
}
