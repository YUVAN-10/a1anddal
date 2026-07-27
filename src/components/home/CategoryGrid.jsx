import { Link } from 'react-router-dom'
import styles from './CategoryGrid.module.css'

export default function CategoryGrid({ categories }) {
  const featured = categories.slice(0, 3)

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Browse</span>
          <h2>Shop by Category</h2>
          <p>Everything you need for your daily rituals and festive celebrations</p>
        </div>
        <div className={styles.grid}>
          {featured.map((cat, i) => (
            <Link
              to="/products"
              key={cat.id}
              className={`${styles.card} fade-in-up`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <img src={cat.image} alt={cat.name} loading="lazy" className={styles.image} />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <span className={styles.cta}>Shop Now →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
