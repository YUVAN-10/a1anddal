import { useEffect, useState } from 'react'
import styles from './ScrollIndicator.module.css'

// Gentle "scroll down" hint; fades out once the visitor actually starts scrolling
export default function ScrollIndicator() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHidden(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${styles.scrollIndicator} ${hidden ? styles.hidden : ''}`} aria-hidden="true">
      <div className={styles.mouse}>
        <span className={styles.wheel} />
      </div>
      <span className={styles.arrow} />
    </div>
  )
}
