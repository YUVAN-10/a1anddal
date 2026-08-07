import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import logo from '../../assets/logo-cropped.png'
import TempleBell from '../common/TempleBell'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleSearchSubmit(e) {
    e.preventDefault()
    const q = new FormData(e.target).get('q')
    navigate(q ? `/products?search=${encodeURIComponent(q)}` : '/products')
    setMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <TempleBell className={styles.navBell} size={24} delay="2s" />
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="A1 Anddal & Co" className={styles.logo} />
        </NavLink>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <form className={styles.mobileSearch} onSubmit={handleSearchSubmit} role="search">
            <FaSearch aria-hidden="true" />
            <input type="search" name="q" placeholder="Search fragrances..." aria-label="Search products" />
          </form>
        </nav>

        <div className={styles.actions}>
          <NavLink to="/products?search=" className={styles.iconBtn} aria-label="Search products">
            <FaSearch />
          </NavLink>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}
