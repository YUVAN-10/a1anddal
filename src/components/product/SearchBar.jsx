import { FaSearch } from 'react-icons/fa'
import styles from './SearchBar.module.css'

export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.wrap}>
      <FaSearch aria-hidden="true" />
      <input
        type="search"
        placeholder="Search for incense, dhoop, dhuna..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search products"
      />
    </div>
  )
}
