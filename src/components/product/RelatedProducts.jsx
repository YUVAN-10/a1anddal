import ProductCard from './ProductCard'
import styles from './RelatedProducts.module.css'

export default function RelatedProducts({ products }) {
  if (!products.length) return null

  return (
    <section className={styles.wrap}>
      <h3>You May Also Like</h3>
      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
