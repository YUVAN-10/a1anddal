import { FaQuoteLeft } from 'react-icons/fa'
import styles from './Testimonials.module.css'

export default function Testimonials({ testimonials }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our Customers Say</h2>
          <p>Real experiences from devotees who shopped with us</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure className={styles.card} key={t.id}>
              <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />
              <blockquote>{t.comment}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
