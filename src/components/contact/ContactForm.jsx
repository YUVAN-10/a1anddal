import { useState } from 'react'
import { FaUser, FaPhoneAlt, FaEnvelope, FaPencilAlt, FaArrowRight } from 'react-icons/fa'
import Button from '../common/Button'
import styles from './ContactForm.module.css'

const EMPTY_FORM = { name: '', phone: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})

  function updateField(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address'
    if (!form.message.trim()) next.message = 'Please enter a message'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:a1anddalerode@gmail.com?subject=${encodeURIComponent('Website Enquiry')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <FaUser className={styles.icon} aria-hidden="true" />
        <input
          type="text"
          placeholder="Your Name"
          aria-label="Your Name"
          value={form.name}
          onChange={(e) => updateField('name', e.target.value)}
        />
      </div>
      {errors.name && <span className={styles.error}>{errors.name}</span>}

      <div className={styles.field}>
        <FaPhoneAlt className={styles.icon} aria-hidden="true" />
        <input
          type="tel"
          placeholder="Phone Number"
          aria-label="Phone Number"
          value={form.phone}
          onChange={(e) => updateField('phone', e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <FaEnvelope className={styles.icon} aria-hidden="true" />
        <input
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
      </div>
      {errors.email && <span className={styles.error}>{errors.email}</span>}

      <div className={`${styles.field} ${styles.fieldTextarea}`}>
        <FaPencilAlt className={styles.icon} aria-hidden="true" />
        <textarea
          rows={5}
          placeholder="Your Message"
          aria-label="Your Message"
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
        />
      </div>
      {errors.message && <span className={styles.error}>{errors.message}</span>}

      <Button type="submit" className={styles.submit}>
        Send Message
        <span className={styles.arrowIcon} aria-hidden="true">
          <FaArrowRight />
        </span>
      </Button>
    </form>
  )
}
