import { motion, useReducedMotion } from 'framer-motion'
import ProductCard from './ProductCard'
import EmptyState from '../common/EmptyState'
import { FaBoxOpen } from 'react-icons/fa'
import styles from './ProductGrid.module.css'

export default function ProductGrid({ products }) {
  const reduceMotion = useReducedMotion()

  if (!products.length) {
    return (
      <EmptyState
        icon={<FaBoxOpen />}
        title="No products found"
        message="Try adjusting your filters or search terms."
      />
    )
  }

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
    <motion.div
      className={styles.grid}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <motion.div key={product.id} className={styles.cardSlot} variants={itemVariants}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  )
}