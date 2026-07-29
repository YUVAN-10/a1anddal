import { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import styles from './Testimonials.module.css'

const AUTO_ROTATE_INTERVAL = 10000

export default function Testimonials({ testimonials = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!testimonials.length) return

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, AUTO_ROTATE_INTERVAL)

    return () => window.clearInterval(intervalId)
  }, [testimonials.length])

  if (!testimonials.length) return null

  const activeTestimonial = testimonials[activeIndex] ?? testimonials[0]

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our Customers Say</h2>
          <p>Real experiences from devotees who shopped with us</p>
        </div>

        <div className={styles.shell}>
          <article className={styles.heroCard} key={activeTestimonial.id}>
            <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />
            <blockquote className={styles.comment}>{activeTestimonial.comment}</blockquote>
            <div className={styles.meta}>
              <strong>{activeTestimonial.name}</strong>
              <span>{activeTestimonial.location}</span>
            </div>
          </article>

          <div className={styles.controls}>
            <div className={styles.progressTrack} key={activeTestimonial.id}>
              <span className={styles.progressBar} />
            </div>

            <div className={styles.tabs} role="tablist" aria-label="Customer testimonials">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex

                return (
                  <button
                    type="button"
                    key={testimonial.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={styles.tabLabel}>{testimonial.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
