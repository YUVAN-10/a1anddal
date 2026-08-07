import styles from './IncenseSmoke.module.css'

// Decorative sambrani smoke wisps — pure CSS, GPU-accelerated (transform + opacity only)
export default function IncenseSmoke() {
  return (
    <div className={styles.smokeLayer} aria-hidden="true">
      <span className={`${styles.wisp} ${styles.wisp1}`} />
      <span className={`${styles.wisp} ${styles.wisp2}`} />
      <span className={`${styles.wisp} ${styles.wisp3}`} />
    </div>
  )
}
