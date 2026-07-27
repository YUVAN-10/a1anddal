import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import ContactForm from './ContactForm'
import styles from './ContactInfo.module.css'

const MAP_QUERY = encodeURIComponent('5RPV+F3J Vellottamparappu, Tamil Nadu')

const CARDS = [
  {
    icon: <FaMapMarkerAlt aria-hidden="true" />,
    label: 'Visit Us',
    content: (
      <>
        A1 Anddal &amp; Co
        <br />
        17/2, ST-4, Water Tank Street, Vellottamparappu (Post), Vellottamparappu, Erode, 638154 Tamil Nadu
      </>
    ),
    highlight: true,
  },
  {
    icon: <FaPhoneAlt aria-hidden="true" />,
    label: 'Call Us',
    content: <a href="tel:+919780451111">+91 97804 51111</a>,
  },
  {
    icon: <FaWhatsapp aria-hidden="true" />,
    label: 'WhatsApp Us',
    content: (
      <a href="https://wa.me/919780451111" target="_blank" rel="noreferrer">
        +91 97804 51111
      </a>
    ),
  },
  {
    icon: <FaEnvelope aria-hidden="true" />,
    label: 'Email Us',
    content: <a href="mailto:a1anddalerode@gmail.com">a1anddalerode@gmail.com</a>,
  },
]

export default function ContactInfo() {
  return (
    <section className="section section--tinted">
      <div className={`container ${styles.layout}`}>
        <div className={styles.cards}>
          {CARDS.map((card) => (
            <div key={card.label} className={card.highlight ? styles.cardHighlight : styles.card}>
              <span className={styles.cardIcon}>{card.icon}</span>
              <div>
                <h4>{card.label}</h4>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mapWrap}>
          <iframe
            title="A1 Anddal & Co location"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={styles.formCol}>
          <ContactForm compact />
        </div>
      </div>
    </section>
  )
}
