import styles from './LotusOutline.module.css'

const PETAL_ANGLES = Array.from({ length: 8 }, (_, i) => i * 45)

// Small/medium outline-only lotus. Rotation is static (per-instance variety),
// the inner svg gets a very slow, gentle float.
export default function LotusOutline({ className = '', size = 220, rotate = 0, floatDuration = 28, opacity, color }) {
  return (
    <div
      className={`${styles.lotusWrap} ${className}`}
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, opacity, color }}
      aria-hidden="true"
    >
      <svg
        className={styles.lotus}
        style={{ animationDuration: `${floatDuration}s` }}
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        {PETAL_ANGLES.map((a) => (
          <ellipse key={a} cx="100" cy="58" rx="20" ry="48" transform={`rotate(${a} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="16" />
      </svg>
    </div>
  )
}
