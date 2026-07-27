import Button from './Button'
import styles from './EmptyState.module.css'

export default function EmptyState({ icon, title, message, ctaLabel, ctaTo }) {
  return (
    <div className={styles.wrap}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3>{title}</h3>
      {message && <p>{message}</p>}
      {ctaLabel && ctaTo && (
        <Button to={ctaTo} variant="primary">
          {ctaLabel}
        </Button>
      )}
    </div>
  )
}
