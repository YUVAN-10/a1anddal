import { Link } from 'react-router-dom'
import CollectionImageCard from './CollectionImageCard'
import styles from './ProductSection.module.css'

export default function ProductSection({ eyebrow, title, subtitle, products, tinted = false, viewAllLink }) {
  if (!products.length) return null

  return (
    <section className={`section ${tinted ? styles.dark : ''}`}>
      <div className="container">
        <div className={`section-heading ${tinted ? styles.darkHeading : ''}`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className={styles.grid}>
          {products.slice(0, 6).map((product) => (
            <CollectionImageCard key={product.id} product={product} />
          ))}
        </div>
        {viewAllLink && (
          <div className={styles.viewAll}>
            <Link to={viewAllLink}>View All →</Link>
          </div>
        )}
      </div>
    </section>
  )
}
