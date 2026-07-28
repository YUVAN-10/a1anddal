import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { formatStartingPrice } from '../../utils/formatCurrency'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const outOfStock = product.stock <= 0

  return (
    <article className={`${styles.card} fade-in-up`}>
      <div className={styles.imageWrap}>
        <Link to={`/products/${product.slug}`}>
          <img src={product.images?.[0]} alt={product.name} loading="lazy" />
        </Link>
        {outOfStock && <span className={styles.outOfStock}>Out of Stock</span>}
      </div>

      <div className={styles.body}>
        <Link to={`/products/${product.slug}`} className={styles.name}>
          {product.name}
        </Link>

        <span className={styles.price}>{formatStartingPrice(product)}</span>

        <Button to={`/products/${product.slug}`} variant="outline" size="sm" fullWidth className={styles.viewDetails}>
          View Details
        </Button>
      </div>
    </article>
  )
}
