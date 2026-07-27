import { useState } from 'react'
import styles from './ContactForm.module.css'

const EMPTY_FORM = { name: '', phone: '', email: '', subject: '', message: '' }

export default function ContactForm({ compact = false }) {
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

    const subject = form.subject.trim() || 'Website Enquiry'
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:a1anddalerode@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  const fields = (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={compact ? styles.fieldsStacked : styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" type="text" value={form.name} onChange={(e) => updateField('name', e.target.value)} />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-phone">Phone</label>
          <input id="contact-phone" type="tel" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" type="text" value={form.subject} onChange={(e) => updateField('subject', e.target.value)} />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" rows={compact ? 3 : 5} value={form.message} onChange={(e) => updateField('message', e.target.value)} />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <button type="submit" className={styles.submit}>
        Send Message
      </button>
    </form>
  )

  if (compact) return fields

  return (
    <div className={styles.wrap}>
      <h3>Send Us a Message</h3>
      <p className={styles.hint}>Fill in the details below and it will open in your email app, ready to send.</p>
      {fields}
    </div>
  )
}
