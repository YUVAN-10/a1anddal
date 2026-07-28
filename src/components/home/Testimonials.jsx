import { useEffect, useRef, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import styles from './Testimonials.module.css'

export default function Testimonials({ testimonials }) {
  const gridRef = useRef(null)
  const [visibleIds, setVisibleIds] = useState(() => new Set())

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('[data-testimonial-id]')
    if (!cards?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.dataset.testimonialId
          setVisibleIds((prev) => new Set(prev).add(id))
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.25 },
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [testimonials])

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our Customers Say</h2>
          <p>Real experiences from devotees who shopped with us</p>
        </div>
        <div className={styles.grid} ref={gridRef}>
          {testimonials.map((t, i) => (
            <figure
              className={`${styles.card} ${visibleIds.has(String(t.id)) ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              data-testimonial-id={t.id}
              key={t.id}
            >
              <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />
              <blockquote>{t.comment}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
