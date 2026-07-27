import { useEffect } from 'react'
import { GiLotus } from 'react-icons/gi'
import Button from '../components/common/Button'
import styles from './NotFound.module.css'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found — A1 Anddal'
  }, [])

  return (
    <div className={`container section ${styles.wrap}`}>
      <GiLotus className={styles.icon} aria-hidden="true" />
      <h1>404</h1>
      <p>This page has wandered off the path. Let's guide you back home.</p>
      <Button to="/" variant="primary" size="lg">
        Return Home
      </Button>
    </div>
  )
}
