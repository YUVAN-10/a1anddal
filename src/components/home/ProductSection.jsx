import { motion, useReducedMotion } from 'framer-motion'
import CollectionImageCard from './CollectionImageCard'
import Button from '../common/Button'
import TempleMotif from '../common/decor/TempleMotif'
import styles from './ProductSection.module.css'

export default function ProductSection({ eyebrow, title, subtitle, products, tinted = false, viewAllLink }) {
  const reduceMotion = useReducedMotion()

  if (!products.length) return null

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.01 : 0.55, ease: 'easeOut' } },
  }

  return (
    <section className={`section ${styles.section} ${tinted ? styles.dark : ''}`}>
      {!tinted && <TempleMotif className={styles.temple} size={260} />}
      <div className="container">
        <div className={`section-heading ${tinted ? styles.darkHeading : ''}`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {products.slice(0, 6).map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <CollectionImageCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        {viewAllLink && (
          <div className={styles.viewAll}>
            <Button to={viewAllLink} variant={tinted ? 'secondary' : 'primary'}>
              View All →
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
