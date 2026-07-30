import { useState, useEffect } from 'react'
import Button from '../common/Button'
import styles from './Hero.module.css'

export default function Hero({ banners }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (banners.length < 2) return
    const id = setInterval(() => setActive((i) => (i + 1) % banners.length), 6000)
    return () => clearInterval(id)
  }, [banners.length])

  if (!banners.length) return null
  const banner = banners[active]

  return (
    <section className={styles.hero}>
      <div className={styles.slideWrap}>
        {banners.map((b, i) => (
          <img
            key={b.id}
            src={b.image}
            alt=""
            className={`${styles.bgImage} ${i === active ? styles.bgActive : ''}`}
          />
        ))}
        {!banner.imageOnly && <div className={styles.overlay} />}
      </div>

      {!banner.imageOnly && (
        <div className={`container ${styles.content} fade-in-up`} key={banner.id}>
          <span className={styles.eyebrow}>Welcome to A1 Andal</span>
          <h1>{banner.title}</h1>
          <p>{banner.subtitle}</p>
          <div className={styles.ctaRow}>
            <Button to={banner.ctaLink ?? '/products'} variant="primary" size="lg">
              {banner.ctaLabel ?? 'Explore Products'}
            </Button>
          </div>
        </div>
      )}

      {banners.length > 1 && (
        <div className={styles.dots}>
          {banners.map((b, i) => (
            <button
              key={b.id}
              aria-label={`Show slide ${i + 1}`}
              className={i === active ? styles.dotActive : styles.dot}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
