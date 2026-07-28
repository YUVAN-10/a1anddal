import { useEffect } from 'react'
import GetInTouch from '../components/contact/GetInTouch'
import InfoStrip from '../components/contact/InfoStrip'
import ContactMap from '../components/contact/ContactMap'
import KeepInTouch from '../components/contact/KeepInTouch'
import styles from './ContactUs.module.css'

export default function ContactUs() {
  useEffect(() => {
    document.title = 'Contact Us — A1 Anddal'
  }, [])

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.intro}`}>
          <h1 className="visually-hidden">Contact Us</h1>
          <p className="visually-hidden">We would love to hear from you.</p>
        </div>
      </section>

      <GetInTouch />
      <InfoStrip />
      <ContactMap />
      <KeepInTouch />
      <div className={styles.spacer} />
    </>
  )
}
