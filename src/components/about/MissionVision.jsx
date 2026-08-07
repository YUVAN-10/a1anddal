import { FaEye, FaBullseye } from 'react-icons/fa'
import { motion, useReducedMotion } from 'framer-motion'
import styles from './MissionVision.module.css'

export default function MissionVision() {
  const reduceMotion = useReducedMotion()

  const sectionVariants = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: reduceMotion ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.section
      className="section section--tinted"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
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
    </motion.section>
  )
}
