import { GiTempleGate, GiFlame, GiLotus } from 'react-icons/gi'
import ContactForm from './ContactForm'
import styles from './GetInTouch.module.css'

export default function GetInTouch() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.formCol}>
          <h2 className={styles.heading}>Get In Touch</h2>
          <p className={styles.subtext}>Have a question or need more information? Feel free to reach out to us.</p>
          <ContactForm />
        </div>

        <div className={styles.imagePanel} aria-hidden="true">
          <div className={styles.imageFrame}>
            <GiLotus className={styles.lotus} />
            <div className={styles.arch}>
              <GiTempleGate className={styles.templeIcon} />
            </div>
            <GiFlame className={`${styles.flame} ${styles.flameLeft}`} />
            <GiFlame className={`${styles.flame} ${styles.flameRight}`} />
          </div>
        </div>
      </div>
    </section>
  )
}
