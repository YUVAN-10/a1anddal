import { Link } from 'react-router-dom'
import { formatStartingPrice } from '../../utils/formatCurrency'
import styles from './CollectionImageCard.module.css'

export default function CollectionImageCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className={`${styles.card} fade-in-up`}>
      <div className={styles.imageWrap}>
        <img src={product.images?.[0]} alt={product.name} loading="lazy" />
      </div>
      <span className={styles.name}>{product.name}</span>
      <span className={styles.price}>{formatStartingPrice(product)}</span>
    </Link>
  )
}
