import styles from './LightParticles.module.css'

// Fixed (not randomized-per-render) set of a few golden glowing motes.
// CSS custom properties drive size/position/timing so we keep one keyframe for all of them.
const PARTICLES = [
  { id: 1, top: '20%', left: '74%', size: 5, duration: '9s', delay: '0s' },
  { id: 2, top: '34%', left: '86%', size: 3, duration: '11s', delay: '1.4s' },
  { id: 3, top: '58%', left: '68%', size: 6, duration: '8.5s', delay: '2.8s' },
  { id: 4, top: '70%', left: '81%', size: 4, duration: '10.5s', delay: '0.6s' },
  { id: 5, top: '46%', left: '92%', size: 3, duration: '12s', delay: '3.6s' },
]

export default function LightParticles() {
  return (
    <div className={styles.particleLayer} aria-hidden="true">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className={styles.particle}
          style={{
            '--p-top': p.top,
            '--p-left': p.left,
            '--p-size': `${p.size}px`,
            '--p-duration': p.duration,
            '--p-delay': p.delay,
          }}
        />
      ))}
    </div>
  )
}
