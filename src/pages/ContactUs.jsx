import { useEffect } from 'react'
import ContactInfo from '../components/contact/ContactInfo'
import styles from './ContactUs.module.css'

export default function ContactUs() {
  useEffect(() => {
    document.title = 'Contact Us — A1 Anddal'
  }, [])

  return (
    <>
      <section className="section">
        <div className={`container ${styles.intro}`}>
          <span className="eyebrow">We'd Love to Hear From You</span>
          <h1>Contact Us</h1>
          <p>
            Questions about a fragrance, an order, or just want to say hello? Reach out to us through any of the
            channels below.
          </p>
        </div>
      </section>
      <ContactInfo />
    </>
  )
}
