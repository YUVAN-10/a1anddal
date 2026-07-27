import styles from './Loader.module.css'

export default function Loader({ fullPage = false, label = 'Loading' }) {
  return (
    <div className={fullPage ? styles.fullPage : styles.inline} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span className="visually-hidden">{label}</span>
    </div>
  )
}
