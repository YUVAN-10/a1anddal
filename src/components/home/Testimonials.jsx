import { useEffect, useRef, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import styles from './Testimonials.module.css'

const AUTO_ROTATE_INTERVAL = 3000

export default function Testimonials({ testimonials = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progressVersion, setProgressVersion] = useState(0)
  const timerRef = useRef(null)
  const startTimeRef = useRef(0)
  const remainingRef = useRef(AUTO_ROTATE_INTERVAL)

  useEffect(() => {
    if (!testimonials.length || isPaused) return

    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
    }

    startTimeRef.current = Date.now()
    timerRef.current = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
      remainingRef.current = AUTO_ROTATE_INTERVAL
      setProgressVersion((version) => version + 1)
    }, remainingRef.current)

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [testimonials.length, activeIndex, isPaused])

  const handleMouseEnter = () => {
    if (!timerRef.current) return

    window.clearTimeout(timerRef.current)
    timerRef.current = null

    const elapsed = Date.now() - startTimeRef.current
    remainingRef.current = Math.max(0, remainingRef.current - elapsed)
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    remainingRef.current = AUTO_ROTATE_INTERVAL
    setIsPaused(false)
    setProgressVersion((version) => version + 1)
  }

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

        <div className={styles.shell} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <article className={styles.heroCard} key={activeTestimonial.id}>
            <span className={styles.edgeBar} />
            <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />
            <blockquote className={styles.comment}>{activeTestimonial.comment}</blockquote>
            <div className={styles.meta}>
              <strong>{activeTestimonial.name}</strong>
              <span>{activeTestimonial.location}</span>
            </div>
          </article>

          <div className={styles.controls}>
            <div className={styles.progressTrack} key={`${activeTestimonial.id}-${progressVersion}`}>
              <span
                className={styles.progressBar}
                style={{
                  animationDuration: `${AUTO_ROTATE_INTERVAL}ms`,
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              />
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
