import { useEffect } from 'react'
import PageHero from '../components/common/PageHero'
import productsHeroBanner from '../assets/slider-hero.jpeg'
import ProductGrid from '../components/product/ProductGrid'
import Loader from '../components/common/Loader'
import TempleMotif from '../components/common/decor/TempleMotif'
import { useProducts, useFilteredProducts } from '../hooks/useProducts'
import styles from './Products.module.css'

export default function Products() {
  const { products, loading } = useProducts()

  useEffect(() => {
    document.title = 'Products — A1 Anddal'
  }, [])

  const filtered = useFilteredProducts(products, {})

  return (
    <>
      <PageHero
        
        backgroundImage={productsHeroBanner}
      />

      <section className={`section ${styles.page}`}>
        <TempleMotif className={styles.temple} size={300} />
        <div className="container">
          <p className={styles.resultCount}>{filtered.length} products found</p>
          {loading ? <Loader /> : <ProductGrid products={filtered} />}
        </div>
      </section>
    </>
  )
}
