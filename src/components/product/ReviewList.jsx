import RatingStars from '../common/RatingStars'
import EmptyState from '../common/EmptyState'
import { FaCommentDots } from 'react-icons/fa'
import styles from './ReviewList.module.css'

export default function ReviewList({ reviews }) {
  if (!reviews.length) {
    return (
      <EmptyState
        icon={<FaCommentDots />}
        title="No reviews yet"
        message="Be the first to share your experience with this product."
      />
    )
  }

  return (
    <div className={styles.list}>
      {reviews.map((review) => (
        <div className={styles.review} key={review.id}>
          <div className={styles.header}>
            <strong>{review.userName}</strong>
            <RatingStars rating={review.rating} />
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  )
}
