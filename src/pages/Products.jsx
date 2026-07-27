import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaFilter } from 'react-icons/fa'
import SearchBar from '../components/product/SearchBar'
import FilterSidebar from '../components/product/FilterSidebar'
import ProductGrid from '../components/product/ProductGrid'
import Loader from '../components/common/Loader'
import Modal from '../components/common/Modal'
import { useProducts, useCategories, useFragranceNotes, useFilteredProducts } from '../hooks/useProducts'
import styles from './Products.module.css'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { products, loading } = useProducts()
  const { categories } = useCategories()
  const { fragranceNotes } = useFragranceNotes()

  const [search, setSearch] = useState(searchParams.get('search') ?? '')
  const [selectedCategoryIds, setSelectedCategoryIds] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : [],
  )
  const [selectedFragrances, setSelectedFragrances] = useState([])
  const [priceRange, setPriceRange] = useState(null)
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    document.title = 'Products — A1 Anddal'
  }, [])

  useEffect(() => {
    const params = {}
    if (search) params.search = search
    if (selectedCategoryIds.length === 1) params.category = selectedCategoryIds[0]
    setSearchParams(params, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, selectedCategoryIds])

  const filtered = useFilteredProducts(products, {
    search,
    categoryIds: selectedCategoryIds,
    fragrances: selectedFragrances,
    minPrice: priceRange?.min,
    maxPrice: priceRange?.max ?? undefined,
    inStockOnly,
    sortBy,
  })

  function toggleCategory(id) {
    setSelectedCategoryIds((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]))
  }

  function toggleFragrance(note) {
    setSelectedFragrances((prev) => (prev.includes(note) ? prev.filter((f) => f !== note) : [...prev, note]))
  }

  function clearAll() {
    setSearch('')
    setSelectedCategoryIds([])
    setSelectedFragrances([])
    setPriceRange(null)
    setInStockOnly(false)
  }

  const filterProps = useMemo(
    () => ({
      categories,
      selectedCategoryIds,
      onToggleCategory: toggleCategory,
      fragranceNotes,
      selectedFragrances,
      onToggleFragrance: toggleFragrance,
      priceRange,
      onSelectPriceRange: setPriceRange,
      inStockOnly,
      onToggleInStock: () => setInStockOnly((v) => !v),
      onClearAll: clearAll,
    }),
    [categories, selectedCategoryIds, fragranceNotes, selectedFragrances, priceRange, inStockOnly],
  )

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <div className="section-heading" style={{ marginBottom: 'var(--space-5)' }}>
          <span className="eyebrow">Shop</span>
          <h1>All Products</h1>
        </div>

        <div className={styles.toolbar}>
          <SearchBar value={search} onChange={setSearch} />
          <div className={styles.toolbarRight}>
            <button className={styles.mobileFilterBtn} onClick={() => setMobileFiltersOpen(true)}>
              <FaFilter /> Filters
            </button>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={styles.sort}>
              <option value="featured">Sort: Featured</option>
              <option value="newest">Newest</option>
              <option value="popular">Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className={styles.layout}>
          <div className={styles.desktopSidebar}>
            <FilterSidebar {...filterProps} />
          </div>

          <div>
            <p className={styles.resultCount}>{filtered.length} products found</p>
            {loading ? <Loader /> : <ProductGrid products={filtered} />}
          </div>
        </div>
      </div>

      <Modal isOpen={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} title=" ">
        <FilterSidebar {...filterProps} />
      </Modal>
    </section>
  )
}
