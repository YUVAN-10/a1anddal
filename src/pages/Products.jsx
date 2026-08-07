import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import productsHeroBanner from '../assets/products-hero-banner.png'
import SearchBar from '../components/product/SearchBar'
import ProductGrid from '../components/product/ProductGrid'
import Loader from '../components/common/Loader'
import TempleMotif from '../components/common/decor/TempleMotif'
import { useProducts, useFilteredProducts } from '../hooks/useProducts'
import styles from './Products.module.css'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { products, loading } = useProducts()

  const [search, setSearch] = useState(searchParams.get('search') ?? '')

  useEffect(() => {
    document.title = 'Products — A1 Anddal'
  }, [])

  useEffect(() => {
    const params = {}
    if (search) params.search = search
    setSearchParams(params, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const filtered = useFilteredProducts(products, { search })

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Handcrafted fragrances for every ritual and moment of devotion"
        backgroundImage={productsHeroBanner}
      />

      <section className={`section ${styles.page}`}>
        <TempleMotif className={styles.temple} size={300} />
        <div className="container">
          <div className={styles.toolbar}>
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <p className={styles.resultCount}>{filtered.length} products found</p>
          {loading ? <Loader /> : <ProductGrid products={filtered} />}
        </div>
      </section>
    </>
  )
}
