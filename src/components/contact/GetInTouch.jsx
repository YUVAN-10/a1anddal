import ContactForm from './ContactForm'
import InfoStrip from './InfoStrip'
import FloralOrnament from '../common/decor/FloralOrnament'
import styles from './GetInTouch.module.css'

export default function GetInTouch() {
  return (
    <section className={`section ${styles.section}`}>
      <FloralOrnament className={styles.floral} size={200} />
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
