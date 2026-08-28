import { motion, useReducedMotion } from 'framer-motion'
import Button from '../common/Button'
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
  const textVariants = useHeroTextVariants()

  if (!banners.length) return null
  const banner = banners[0]

  return (
    <section className={styles.hero}>
      <div className={styles.slideWrap}>
        <div
          className={styles.bgImage}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundPosition: banner.objectPosition || "center center",
          }}
          role="img"
          aria-label={banner.alt || "Hero Banner"}
        />
      </div>

      <DecorativeMotifs />
    </section>
  )
}
