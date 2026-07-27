import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <Link to="/" className={styles.brand}>
            A1 <span>Anddal</span>
          </Link>
          <p>
            Premium incense sticks, dhoop and dhuna, handcrafted with natural ingredients — bringing peaceful
            fragrance to every home.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4>Categories</h4>
          <ul>
            <li><Link to="/products?category=cat-incense">Incense Sticks</Link></li>
            <li><Link to="/products?category=cat-dhuna">Dhuna</Link></li>
            <li><Link to="/products?category=cat-dhoop">Dhoop</Link></li>
            <li><Link to="/products?category=cat-collections">Fragrance Collections</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact Us</h4>
          <ul className={styles.contact}>
            <li><FaMapMarkerAlt aria-hidden="true" /> 12 Temple Street, Mylapore, Chennai, TN 600004</li>
            <li><FaPhoneAlt aria-hidden="true" /> +91 98765 43210</li>
            <li><FaEnvelope aria-hidden="true" /> hello@a1anddal.com</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} A1 Anddal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
