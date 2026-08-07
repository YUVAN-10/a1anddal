import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../common/Button'
import TempleBell from '../common/TempleBell'
import IncenseSmoke from './hero/IncenseSmoke'
import LightParticles from './hero/LightParticles'
import SunRays from './hero/SunRays'
import DecorativeMotifs from './hero/DecorativeMotifs'
import ScrollIndicator from './hero/ScrollIndicator'
import styles from './Hero.module.css'

// Entrance variants for the hero copy — heading leads, subheading follows at
// ~300ms, CTA settles in last. Disabled (near-instant) under reduced motion.
function useHeroTextVariants() {
  const reduceMotion = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1]

  return {
    eyebrow: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
      visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.01 : 0.6, ease } },
    },
    heading: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0.01 : 0.75, ease, delay: reduceMotion ? 0 : 0.1 },
      },
    },
    subheading: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0.01 : 0.7, ease, delay: reduceMotion ? 0 : 0.3 },
      },
    },
    cta: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0.01 : 0.6, ease, delay: reduceMotion ? 0 : 0.5 },
      },
    },
  }
}

// The Button component itself now owns lift/scale/shine/glow/ripple — this just
// adds the trailing arrow nudge, which is unique to the hero CTA's copy.
function HeroCTAButton({ to, ctaLabel }) {
  return (
    <Button to={to} variant="primary" size="lg" className={styles.ctaBtn}>
      {ctaLabel}
      <span className={styles.ctaArrow} aria-hidden="true">
        &rarr;
      </span>
    </Button>
  )
}

export default function Hero({ banners }) {
  const [active, setActive] = useState(0)
  const textVariants = useHeroTextVariants()

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
        <SunRays />
        {!banner.imageOnly && <div className={styles.overlay} />}
      </div>

      <DecorativeMotifs />
      <IncenseSmoke />
      <LightParticles />
      <TempleBell className={styles.bellLeft} delay="0s" />
      <TempleBell className={styles.bellRight} delay="1.2s" />

      {!banner.imageOnly && (
        <div className={`container ${styles.content}`} key={banner.id}>
          <motion.span
            className={styles.eyebrow}
            variants={textVariants.eyebrow}
            initial="hidden"
            animate="visible"
          >
            Welcome to A1 Andal
          </motion.span>
          <motion.h1 variants={textVariants.heading} initial="hidden" animate="visible">
            {banner.title}
          </motion.h1>
          <motion.p variants={textVariants.subheading} initial="hidden" animate="visible">
            {banner.subtitle}
          </motion.p>
          <motion.div
            className={styles.ctaRow}
            variants={textVariants.cta}
            initial="hidden"
            animate="visible"
          >
            <HeroCTAButton to={banner.ctaLink ?? '/products'} ctaLabel={banner.ctaLabel ?? 'Explore Products'} />
          </motion.div>
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

      <ScrollIndicator />
    </section>
  )
}
