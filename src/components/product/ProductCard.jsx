import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { formatStartingPrice } from '../../utils/formatCurrency'
import styles from './ProductCard.module.css'

const PARTICLES = [
  { top: '18%', left: '22%', delay: '0s' },
  { top: '30%', left: '78%', delay: '0.4s' },
  { top: '62%', left: '15%', delay: '0.8s' },
  { top: '70%', left: '68%', delay: '0.2s' },
]

export default function ProductCard({ product }) {
  const outOfStock = product.stock <= 0

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Link to={`/products/${product.slug}`}>
          <img src={product.images?.[0]} alt={product.name} loading="lazy" />
        </Link>
        {outOfStock && <span className={styles.outOfStock}>Out of Stock</span>}

        {/* incense smoke wisps — only animate while the card is hovered */}
        <span className={styles.smokeLayer} aria-hidden="true">
          <span className={styles.smokeWisp} />
          <span className={styles.smokeWisp2} />
        </span>

        {/* diagonal shine sweep — plays once per hover */}
        <span className={styles.shine} aria-hidden="true" />

        {/* a few tiny sacred light particles, hover-only */}
        <span className={styles.particleLayer} aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className={styles.particle}
              style={{ top: p.top, left: p.left, animationDelay: p.delay }}
            />
          ))}
        </span>
      </div>

      <div className={styles.body}>
        <Link to={`/products/${product.slug}`} className={styles.name}>
          {product.name}
        </Link>

        <div className={styles.priceRow}>
          <span className={styles.price}>{formatStartingPrice(product)}</span>

          <div className={styles.ctaWrap}>
            <Button to={`/products/${product.slug}`} variant="outline" size="sm" className={styles.viewDetails}>
              View Details
              <span className={styles.btnArrow} aria-hidden="true">
                &rarr;
              </span>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
