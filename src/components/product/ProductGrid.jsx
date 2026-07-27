import ProductCard from './ProductCard'
import EmptyState from '../common/EmptyState'
import { FaBoxOpen } from 'react-icons/fa'
import styles from './ProductGrid.module.css'

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <EmptyState
        icon={<FaBoxOpen />}
        title="No products found"
        message="Try adjusting your filters or search terms."
      />
    )
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
