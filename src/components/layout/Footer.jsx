import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import styles from './Footer.module.css'

const PETAL_ANGLES = [0, 18, 36, 54, 72, 90]

function MandalaCorner({ className }) {
  return (
    <svg className={className} viewBox="0 0 220 220" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.55">
        <circle cx="0" cy="220" r="45" />
        <circle cx="0" cy="220" r="90" />
        <circle cx="0" cy="220" r="135" />
        <circle cx="0" cy="220" r="180" />
        {PETAL_ANGLES.map((deg) => {
          const rad = (deg * Math.PI) / 180
          const x = 150 * Math.cos(rad)
          const y = 220 - 150 * Math.sin(rad)
          return <circle key={deg} cx={x} cy={y} r="24" />
        })}
      </g>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.scallop} aria-hidden="true" />
      <MandalaCorner className={styles.cornerLeft} />
      <MandalaCorner className={styles.cornerRight} />

      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="A1 Anddal & Co" className={styles.logo} />
          </Link>
          <span className={styles.miniDivider} aria-hidden="true">✥</span>
          <p className={styles.tagline}>
            Fragrance of devotion,
            <br />
            Essence of tradition.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Products</h4>
          <ul>
            <li><Link to="/products">Incense Sticks</Link></li>
            <li><Link to="/products">Sambirani Cups</Link></li>
            <li><Link to="/products">Dhoop Cones</Link></li>
            <li><Link to="/products">Pooja Essentials</Link></li>
            <li><Link to="/products">Others</Link></li>
          </ul>
        </div>

        <div className={`${styles.col} ${styles.colFollow}`}>
          <h4>Follow Us</h4>
          <div className={styles.social}>
            <a href="https://www.facebook.com/share/14n5uKMjSUk/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/a1anddalerode" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com/@a1anddaldivineproducts" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.bottomDivider} aria-hidden="true">✥</span>
        <div className="container">
          <p>© {new Date().getFullYear()} A1 Andaal Pooja Products. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
