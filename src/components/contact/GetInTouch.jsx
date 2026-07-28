import ContactForm from './ContactForm'
import InfoStrip from './InfoStrip'
import styles from './GetInTouch.module.css'

export default function GetInTouch() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.infoCol}>
          <h2 className={styles.heading}>Contact Info</h2>
          <div className={styles.infoStripWrap}>
            <InfoStrip />
          </div>
        </div>

        <div className={styles.formCol}>
          <h2 className={styles.heading}>Get In Touch</h2>
          <p className={styles.subtext}>Have a question or need more information? Feel free to reach out to us.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
