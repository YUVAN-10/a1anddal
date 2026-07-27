import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="A1 Anddal & Co" className={styles.logo} />
          </Link>
          <p>
            Premium incense sticks, dhoop and dhuna, handcrafted with natural ingredients — bringing peaceful
            fragrance to every home.
          </p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/share/14n5uKMjSUk/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/a1anddalerode" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com/@a1anddaldivineproducts" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
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
          <h4>Contact Us</h4>
          <ul className={styles.contact}>
            <li><FaMapMarkerAlt aria-hidden="true" /> A1 Anddal & Co
17/2,ST-4, Water Tank Street, Vellottamparappu(Post), Vellottamparappu, Erode, 638154 Tamil Nadu</li>
            <li><FaPhoneAlt aria-hidden="true" /> +91 97804 51111</li>
            <li><FaWhatsapp aria-hidden="true" /> +91 97804 51111</li>
            <li><FaEnvelope aria-hidden="true" /> a1anddalerode@gmail.com</li>
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
