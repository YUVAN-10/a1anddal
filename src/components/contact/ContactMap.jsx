import styles from './ContactMap.module.css'

const MAP_QUERY = encodeURIComponent('5RPV+F3J Vellottamparappu, Tamil Nadu')

export default function ContactMap() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.card}>
          <iframe
            title="A1 Anddal & Co location"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
