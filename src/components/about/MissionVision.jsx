import { FaEye, FaBullseye } from 'react-icons/fa'
import styles from './MissionVision.module.css'

export default function MissionVision() {
  return (
    <section className="section section--tinted">
      <div className={`container ${styles.mvGrid}`}>
        <div className={styles.mvCard}>
          <FaEye className={styles.mvIcon} aria-hidden="true" />
          <h3>Our Vision</h3>
          <p>
            To become one of India's most trusted and respected manufacturers of incense and sambrani products by
            delivering premium-quality products that represent purity, authenticity, and tradition.
          </p>
          <p>
            We strive to preserve India's spiritual heritage while continuously innovating and introducing
            long-lasting fragrances that create a peaceful atmosphere for every home.
          </p>
        </div>
        <div className={styles.mvCard}>
          <FaBullseye className={styles.mvIcon} aria-hidden="true" />
          <h3>Our Mission</h3>
          <p>
            To manufacture high-quality incense, sambrani, dhuna dhoops, camphor, and aromatic products using
            carefully selected ingredients and proven manufacturing practices.
          </p>
          <p>
            We are committed to delivering products that provide purity, consistency, long-lasting fragrance, and a
            truly spiritual experience while maintaining the highest quality standards.
          </p>
        </div>
      </div>
    </section>
  )
}
