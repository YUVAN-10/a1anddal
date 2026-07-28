import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import QuickViewModal from './QuickViewModal'
import { formatStartingPrice } from '../../utils/formatCurrency'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const outOfStock = product.stock <= 0

  return (
    <>
      <article className={`${styles.card} fade-in-up`}>
        <div className={styles.imageWrap}>
          <Link to={`/products/${product.slug}`}>
            <img src={product.images?.[0]} alt={product.name} loading="lazy" />
          </Link>
          <div className={styles.hoverActions}>
            <button type="button" aria-label="Quick view" onClick={() => setQuickViewOpen(true)}>
              <FaEye />
            </button>
          </div>
          {outOfStock && <span className={styles.outOfStock}>Out of Stock</span>}
        </div>

        <div className={styles.body}>
          <Link to={`/products/${product.slug}`} className={styles.name}>
            {product.name}
          </Link>
          
          <span className={styles.price}>{formatStartingPrice(product)}</span>
        </div>
      </article>

      <QuickViewModal
        product={product}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  )
}
