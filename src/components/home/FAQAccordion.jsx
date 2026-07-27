import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import styles from './FAQAccordion.module.css'

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <section className="section section--tinted">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={styles.list}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div className={styles.item} key={faq.id}>
                <button
                  className={styles.question}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown className={isOpen ? styles.iconOpen : ''} aria-hidden="true" />
                </button>
                <div
                  id={`faq-panel-${faq.id}`}
                  className={styles.answer}
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
