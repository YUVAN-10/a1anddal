import styles from './FilterSidebar.module.css'

const PRICE_RANGES = [
  { label: 'Under ₹200', min: 0, max: 200 },
  { label: '₹200 – ₹500', min: 200, max: 500 },
  { label: '₹500 – ₹1,000', min: 500, max: 1000 },
  { label: 'Above ₹1,000', min: 1000, max: null },
]

export default function FilterSidebar({
  categories,
  selectedCategoryIds,
  onToggleCategory,
  fragranceNotes,
  selectedFragrances,
  onToggleFragrance,
  priceRange,
  onSelectPriceRange,
  inStockOnly,
  onToggleInStock,
  onClearAll,
}) {
  return (
    <aside className={styles.wrap}>
      <div className={styles.headerRow}>
        <h3>Filters</h3>
        <button type="button" onClick={onClearAll} className={styles.clear}>
          Clear all
        </button>
      </div>

      <div className={styles.group}>
        <h4>Category</h4>
        {categories.map((cat) => (
          <label key={cat.id} className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={selectedCategoryIds.includes(cat.id)}
              onChange={() => onToggleCategory(cat.id)}
            />
            <span>{cat.name}</span>
          </label>
        ))}
      </div>

      <div className={styles.group}>
        <h4>Fragrance</h4>
        {fragranceNotes.map((note) => (
          <label key={note} className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={selectedFragrances.includes(note)}
              onChange={() => onToggleFragrance(note)}
            />
            <span>{note}</span>
          </label>
        ))}
      </div>

      <div className={styles.group}>
        <h4>Price</h4>
        {PRICE_RANGES.map((range) => (
          <label key={range.label} className={styles.checkboxRow}>
            <input
              type="radio"
              name="price-range"
              checked={priceRange?.label === range.label}
              onChange={() => onSelectPriceRange(range)}
            />
            <span>{range.label}</span>
          </label>
        ))}
        {priceRange && (
          <button type="button" className={styles.clear} onClick={() => onSelectPriceRange(null)}>
            Reset price
          </button>
        )}
      </div>

      <div className={styles.group}>
        <h4>Availability</h4>
        <label className={styles.checkboxRow}>
          <input type="checkbox" checked={inStockOnly} onChange={onToggleInStock} />
          <span>In stock only</span>
        </label>
      </div>
    </aside>
  )
}

export { PRICE_RANGES }
