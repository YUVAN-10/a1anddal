import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import styles from './RatingStars.module.css'

export default function RatingStars({ rating = 0, count, size = 14 }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.5
  const empty = 5 - full - (hasHalf ? 1 : 0)

  return (
    <div className={styles.wrap} role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      <span className={styles.stars} style={{ fontSize: size }}>
        {Array.from({ length: full }).map((_, i) => (
          <FaStar key={`f${i}`} aria-hidden="true" />
        ))}
        {hasHalf && <FaStarHalfAlt aria-hidden="true" />}
        {Array.from({ length: empty }).map((_, i) => (
          <FaRegStar key={`e${i}`} aria-hidden="true" />
        ))}
      </span>
      {count != null && <span className={styles.count}>({count})</span>}
    </div>
  )
}
