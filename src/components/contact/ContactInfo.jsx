import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import styles from './ContactInfo.module.css'

export default function ContactInfo() {
  return (
    <section className="section section--tinted">
      <div className="container">
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <FaMapMarkerAlt aria-hidden="true" />
            <h4>Visit Us</h4>
            <p>5RPV+F3J Vellottamparappu, Tamil Nadu</p>
          </div>
          <div className={styles.contactCard}>
            <FaPhoneAlt aria-hidden="true" />
            <h4>Call Us</h4>
            <p>
              <a href="tel:+919780451111">+91 97804 51111</a>
            </p>
          </div>
          <div className={styles.contactCard}>
            <FaWhatsapp aria-hidden="true" />
            <h4>WhatsApp Us</h4>
            <p>
              <a href="https://wa.me/919780451111" target="_blank" rel="noreferrer">
                +91 97804 51111
              </a>
            </p>
          </div>
          <div className={styles.contactCard}>
            <FaEnvelope aria-hidden="true" />
            <h4>Email Us</h4>
            <p>
              <a href="mailto:a1anddalerode@gmail.com">a1anddalerode@gmail.com</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
