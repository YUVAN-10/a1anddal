import { Link } from 'react-router-dom'
import styles from './AboutSnippet.module.css'

export default function AboutSnippet() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <span className="eyebrow">Who We Are</span>
        <h2>A1 Anddal &amp; Co</h2>
        <p>
          Dedicated to bringing purity, tradition, and divine fragrance into every home — with premium sambrani
          cups, dhoops, incense cones and loban sticks, hand-crafted using natural ingredients and time-honoured
          methods.
        </p>
        <Link to="/about" className={styles.link}>
          Learn More About Us →
        </Link>
      </div>
    </section>
  )
}
