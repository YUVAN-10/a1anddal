import { useEffect, useState } from 'react'
import { FaAward, FaCogs, FaTag, FaPrayingHands, FaShieldAlt } from 'react-icons/fa'
import { GiFactory, GiPerfumeBottle, GiLotus } from 'react-icons/gi'
import styles from './WhyChooseUs.module.css'

const POINTS = [
  { icon: <FaAward />, title: 'Premium Quality Ingredients' },
  { icon: <GiFactory />, title: 'Traditional Craftsmanship' },
  { icon: <GiPerfumeBottle />, title: 'Customized Fragrance' },
  { icon: <FaCogs />, title: 'Job Work' },
  { icon: <FaTag />, title: 'White Labeling' },
  { icon: <GiLotus />, title: 'Wide Range of Fragrances' },
  { icon: <FaPrayingHands />, title: 'Perfect for Daily Worship' },
  { icon: <FaShieldAlt />, title: 'Trusted Quality' },
]

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsVisible(true), 120)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <section className="section section--tinted">
      <div className="container">
        <div className={styles.headingWrap}>
          <div className="section-heading">
            <span className="eyebrow">Our Promise</span>
            <h2>Why Choose Us</h2>
          </div>
        </div>
        <div className={styles.grid}>
          {POINTS.map((p, index) => (
            <div
              className={`${styles.item} ${isVisible ? styles.visible : ''}`}
              key={p.title}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className={styles.icon}>{p.icon}</span>
              <h4>{p.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
