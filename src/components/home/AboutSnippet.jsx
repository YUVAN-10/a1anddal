import { motion, useReducedMotion } from 'framer-motion'
import Button from '../common/Button'
import LotusOutline from '../common/decor/LotusOutline'
import styles from './AboutSnippet.module.css'

export default function AboutSnippet() {
  const reduceMotion = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.18, delayChildren: reduceMotion ? 0 : 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.01 : 0.65, ease } },
  }

  return (
    <section className={`section ${styles.section}`}>
      <LotusOutline className={styles.lotus} size={240} rotate={-8} floatDuration={26} />
      <motion.div
        className={`container ${styles.wrap}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span className="eyebrow" variants={itemVariants}>
          Who We Are
        </motion.span>
        <motion.h2 variants={itemVariants}>A1 Anddal &amp; Co</motion.h2>
        <motion.p variants={itemVariants}>
          Dedicated to bringing purity, tradition, and divine fragrance into every home — with premium sambrani
          cups, dhoops, incense cones and loban sticks, hand-crafted using natural ingredients and time-honoured
          methods.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button to="/about" variant="primary">
            Learn More About Us →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
