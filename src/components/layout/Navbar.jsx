import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import logo from '../../assets/logo-cropped.png'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

function navPetalPath(radius, length, width) {
  const tipX = radius + length
  const shoulderX = radius + length * 0.72
  const shoulderY = width * 0.55
  return `M${radius},0
          Q${radius + length * 0.28},${-width} ${shoulderX},${-shoulderY}
          Q${tipX},0 ${shoulderX},${shoulderY}
          Q${radius + length * 0.28},${width} ${radius},0 Z`
}

function NavPetal({ angle, radius, length, width }) {
  return (
    <g transform={`rotate(${-angle})`}>
      <path d={navPetalPath(radius, length, width)} fill="currentColor" fillOpacity="0.55" />
      <path d={navPetalPath(radius, length, width)} fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.8" />
    </g>
  )
}

const NAV_RING_OUTER = Array.from({ length: 12 }, (_, i) => i * 30)
const NAV_RING_INNER = Array.from({ length: 6 }, (_, i) => i * 60 + 15)

function NavMandala({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 92" aria-hidden="true">
      <g transform="translate(100, 46)" fill="none" stroke="currentColor">
        <circle r="44" strokeWidth="0.6" opacity="0.35" />
        <circle r="32" strokeWidth="0.6" opacity="0.4" />
        <circle r="4" fill="currentColor" stroke="none" opacity="0.7" />
        {NAV_RING_OUTER.map((a) => (
          <NavPetal key={`o-${a}`} angle={a} radius={20} length={10} width={3} />
        ))}
        {NAV_RING_INNER.map((a) => (
          <NavPetal key={`i-${a}`} angle={a} radius={7} length={7} width={2} />
        ))}
      </g>
    </svg>
  )
}

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
      <div className={styles.flowerClip} aria-hidden="true">
        <NavMandala className={styles.headerFlower} />
      </div>
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
