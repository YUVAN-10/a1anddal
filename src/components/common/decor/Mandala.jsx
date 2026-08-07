import styles from './Mandala.module.css'

const SPOKES = Array.from({ length: 16 }, (_, i) => i * (360 / 16))
const DOT_SPOKES = SPOKES.filter((_, i) => i % 2 === 0)

// Large, thin-line-only mandala. Purely decorative, spins extremely slowly.
export default function Mandala({ className = '', size = 700, duration = 5400, opacity, color }) {
  return (
    <svg
      className={`${styles.mandala} ${className}`}
      style={{
        width: size,
        height: size,
        animationDuration: `${duration}s`,
        opacity,
        color,
      }}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="96" />
      <circle cx="100" cy="100" r="80" />
      <circle cx="100" cy="100" r="64" />
      <circle cx="100" cy="100" r="48" />
      <circle cx="100" cy="100" r="32" />
      <circle cx="100" cy="100" r="16" />
      {SPOKES.map((a) => {
        const rad = (a * Math.PI) / 180
        return (
          <line
            key={a}
            x1={100 + 16 * Math.cos(rad)}
            y1={100 + 16 * Math.sin(rad)}
            x2={100 + 96 * Math.cos(rad)}
            y2={100 + 96 * Math.sin(rad)}
          />
        )
      })}
      {DOT_SPOKES.map((a) => {
        const rad = (a * Math.PI) / 180
        return <circle key={`d-${a}`} cx={100 + 72 * Math.cos(rad)} cy={100 + 72 * Math.sin(rad)} r="3" />
      })}
    </svg>
  )
}
