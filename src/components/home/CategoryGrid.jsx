import { Link } from 'react-router-dom'
import styles from './CategoryGrid.module.css'

export default function CategoryGrid({ categories }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Browse</span>
          <h2>Shop by Category</h2>
          <p>Everything you need for your daily rituals and festive celebrations</p>
        </div>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link to={`/products?category=${cat.id}`} key={cat.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
