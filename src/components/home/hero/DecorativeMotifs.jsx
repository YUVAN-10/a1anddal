import styles from './DecorativeMotifs.module.css'

const MANDALA_SPOKES = Array.from({ length: 12 }, (_, i) => i * 30)
const LOTUS_PETALS = Array.from({ length: 8 }, (_, i) => i * 45)

// Faint traditional motifs (mandala + lotus outlines), fixed in the background, barely drifting
export default function DecorativeMotifs() {
  return (
    <div className={styles.motifLayer} aria-hidden="true">
      <svg
        className={`${styles.motif} ${styles.mandala}`}
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="50" />
        <circle cx="100" cy="100" r="30" />
        {MANDALA_SPOKES.map((angle) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 100 + 30 * Math.cos(rad)
          const y1 = 100 + 30 * Math.sin(rad)
          const x2 = 100 + 90 * Math.cos(rad)
          const y2 = 100 + 90 * Math.sin(rad)
          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} />
        })}
      </svg>

      <svg
        className={`${styles.motif} ${styles.lotus}`}
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {LOTUS_PETALS.map((angle) => (
          <ellipse key={angle} cx="100" cy="58" rx="18" ry="46" transform={`rotate(${angle} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="14" />
      </svg>
    </div>
  )
}
