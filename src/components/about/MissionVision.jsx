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
            Our vision is to become one of the most trusted and respected names in the incense and sambrani industry
            by delivering products that reflect purity, quality, and tradition. We aim to bring the timeless essence
            of authentic fragrances into every home, creating an atmosphere of peace, positivity, and spiritual
            well-being.
          </p>
          <p>
            We aspire to preserve India's rich cultural and devotional heritage by crafting aromatic products that
            enhance daily prayers, meditation, festivals, and special occasions. Through our commitment to
            excellence, we strive to keep traditional practices alive while meeting the expectations of modern
            consumers.
          </p>
          <p>
            Innovation and quality are at the heart of our vision. We continuously work to improve our products by
            selecting premium ingredients, maintaining high manufacturing standards, and introducing fragrances that
            provide a long-lasting and refreshing experience for our customers.
          </p>
        </div>
        <div className={styles.mvCard}>
          <FaBullseye className={styles.mvIcon} aria-hidden="true" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to manufacture high-quality incense, sambrani, dhoops, and aromatic products using
            carefully selected ingredients and proven manufacturing practices. We are committed to delivering
            products that offer purity, consistency, and a long-lasting fragrance experience.
          </p>
          <p>
            We strive to preserve the rich heritage of traditional aromatic practices while embracing modern quality
            standards and innovation. By combining time-honored methods with advanced production techniques, we
            ensure that every product reflects authenticity and excellence.
          </p>
          <p>
            We are dedicated to offering a diverse range of fragrances that inspire devotion, inner peace, and
            positive energy. Our products are thoughtfully crafted to enhance daily prayers, meditation, spiritual
            rituals, and create a calm and welcoming atmosphere in every home.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
