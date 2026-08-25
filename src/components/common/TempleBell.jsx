import styles from './TempleBell.module.css'

// Small decorative temple bell (ghanti) — swings gently on a slow, mostly-idle loop.
// Positioning is left to the consumer (via className); delay lets multiple bells
// on the same page swing slightly out of sync so it reads as natural, not mechanical.
export default function TempleBell({ className = '', delay = '0.1s', size = 34 }) {
  const height = Math.round((size * 48) / 34)

  return (
    <div
      className={`${styles.bellWrap} ${className}`}
      aria-hidden="true"
      style={{ '--bell-delay': delay }}
    >
      <div className={styles.bellSwing}>
        <svg width={size} height={height} viewBox="0 0 34 48" fill="none">
          <line x1="17" y1="0" x2="17" y2="8" stroke="#c9a227" strokeWidth="2" />
          <circle cx="17" cy="6" r="2.6" fill="#e6c65c" />
          <path
            d="M8 30C8 16 26 16 26 30L29 35C29 37 5 37 5 35Z"
            fill="#d9a441"
            stroke="#a9791f"
            strokeWidth="1"
          />
          <rect x="6" y="35" width="22" height="3.4" rx="1.7" fill="#c9922f" stroke="#a9791f" strokeWidth="0.6" />
          <line x1="17" y1="38.4" x2="17" y2="44" stroke="#8a5a17" strokeWidth="1.4" />
          <circle cx="17" cy="45.5" r="2.4" fill="#8a5a17" />
          <ellipse className={styles.bellShine} cx="12.5" cy="23" rx="2.6" ry="7" fill="rgba(255,255,255,0.55)" />
        </svg>
      </div>
    </div>
  )
}
