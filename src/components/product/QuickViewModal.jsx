import { Link } from 'react-router-dom'
import Modal from '../common/Modal'
import RatingStars from '../common/RatingStars'
import Button from '../common/Button'
import { formatStartingPrice } from '../../utils/formatCurrency'
import styles from './QuickViewModal.module.css'

export default function QuickViewModal({ product, isOpen, onClose }) {
  if (!product) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" title={product.name}>
      <div className={styles.grid}>
        <img src={product.images?.[0]} alt={product.name} className={styles.image} />
        <div>
          <RatingStars rating={product.rating} count={product.ratingCount} />
          <p className={styles.price}>{formatStartingPrice(product)}</p>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.actions}>
            <Button variant="primary" to={`/products/${product.slug}`} fullWidth onClick={onClose}>
              View Full Details
            </Button>
          </div>
          <Link to={`/products/${product.slug}`} className={styles.detailsLink} onClick={onClose}>
            See specifications & reviews
          </Link>
        </div>
      </div>
    </Modal>
  )
}
