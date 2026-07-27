import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../components/product/SearchBar'
import ProductGrid from '../components/product/ProductGrid'
import Loader from '../components/common/Loader'
import { useProducts, useFilteredProducts } from '../hooks/useProducts'
import styles from './Products.module.css'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { products, loading } = useProducts()

  const [search, setSearch] = useState(searchParams.get('search') ?? '')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    document.title = 'Products — A1 Anddal'
  }, [])

  useEffect(() => {
    const params = {}
    if (search) params.search = search
    setSearchParams(params, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const filtered = useFilteredProducts(products, { search, sortBy })

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <div className="section-heading" style={{ marginBottom: 'var(--space-5)' }}>
          <span className="eyebrow">Shop</span>
          <h1>All Products</h1>
        </div>

        <div className={styles.toolbar}>
          <SearchBar value={search} onChange={setSearch} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={styles.sort}>
            <option value="featured">Sort: Featured</option>
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <p className={styles.resultCount}>{filtered.length} products found</p>
        {loading ? <Loader /> : <ProductGrid products={filtered} />}
      </div>
    </section>
  )
}
