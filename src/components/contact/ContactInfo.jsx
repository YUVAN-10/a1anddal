import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'
import styles from './ContactInfo.module.css'

export default function ContactInfo() {
  return (
    <section className="section section--tinted">
      <div className="container">
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <FaMapMarkerAlt aria-hidden="true" />
            <h4>Visit Us</h4>
            <p>12 Temple Street, Mylapore, Chennai, Tamil Nadu 600004</p>
          </div>
          <div className={styles.contactCard}>
            <FaPhoneAlt aria-hidden="true" />
            <h4>Call Us</h4>
            <p>+91 98765 43210</p>
          </div>
          <div className={styles.contactCard}>
            <FaEnvelope aria-hidden="true" />
            <h4>Email Us</h4>
            <p>hello@a1anddal.com</p>
          </div>
          <div className={styles.contactCard}>
            <FaClock aria-hidden="true" />
            <h4>Working Hours</h4>
            <p>Mon – Sat, 9:00 AM – 7:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
