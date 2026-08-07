import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '../../assets/logo-cropped.png'
import Mandala from '../common/decor/Mandala'
import styles from './Footer.module.css'

function petalPath(radius, length, width) {
  const tipX = radius + length
  const shoulderX = radius + length * 0.72
  const shoulderY = width * 0.55
  return `M${radius},0
          Q${radius + length * 0.28},${-width} ${shoulderX},${-shoulderY}
          Q${tipX},0 ${shoulderX},${shoulderY}
          Q${radius + length * 0.28},${width} ${radius},0 Z`
}

function Petal({ angle, radius, length, width, opacity = 1 }) {
  const tipX = radius + length
  return (
    <g transform={`rotate(${-angle})`} opacity={opacity}>
      <path d={petalPath(radius, length, width)} fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1" />
      <path d={petalPath(radius + length * 0.16, length * 0.62, width * 0.6)} fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.8" />
      <circle cx={tipX} cy="0" r="1.6" fill="currentColor" />
    </g>
  )
}

function DotArc({ radius, count, size = 1.4, opacity = 0.45 }) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (i * 90) / (count - 1)
    const rad = (angle * Math.PI) / 180
    const x = radius * Math.cos(rad)
    const y = -radius * Math.sin(rad)
    return <circle key={i} cx={x} cy={y} r={size} fill="currentColor" opacity={opacity} />
  })
}

const RING_1 = Array.from({ length: 12 }, (_, i) => i * 7.5)
const RING_2 = Array.from({ length: 10 }, (_, i) => i * 9 + 4.5)
const RING_3 = Array.from({ length: 8 }, (_, i) => i * 11 + 5.5)
const RING_4 = Array.from({ length: 6 }, (_, i) => i * 15 + 7.5)
const RING_5 = Array.from({ length: 5 }, (_, i) => i * 18 + 9)
const BUD_PETALS = [14, 45, 76]

function MandalaCorner({ className }) {
  return (
    <svg className={className} viewBox="0 0 260 260" aria-hidden="true">
      <g transform="translate(0, 260)" fill="none" stroke="currentColor">
        <circle r="22" strokeWidth="0.75" opacity="0.4" />
        <circle r="48" strokeWidth="0.75" opacity="0.32" />
        <circle r="80" strokeWidth="0.75" opacity="0.28" />
        <circle r="118" strokeWidth="0.75" opacity="0.24" />
        <circle r="160" strokeWidth="0.75" opacity="0.2" />
        <circle r="205" strokeWidth="0.75" opacity="0.16" />

        <DotArc radius={64} count={9} />
        <DotArc radius={99} count={11} />
        <DotArc radius={139} count={13} />
        <DotArc radius={182} count={15} />

        {RING_1.map((a) => (
          <Petal key={`r1-${a}`} angle={a} radius={165} length={70} width={17} opacity={0.55} />
        ))}
        {RING_2.map((a) => (
          <Petal key={`r2-${a}`} angle={a} radius={128} length={55} width={14} opacity={0.58} />
        ))}
        {RING_3.map((a) => (
          <Petal key={`r3-${a}`} angle={a} radius={92} length={42} width={12} opacity={0.6} />
        ))}
        {RING_4.map((a) => (
          <Petal key={`r4-${a}`} angle={a} radius={58} length={32} width={9} opacity={0.62} />
        ))}
        {RING_5.map((a) => (
          <Petal key={`r5-${a}`} angle={a} radius={28} length={22} width={6} opacity={0.65} />
        ))}
        {BUD_PETALS.map((a) => (
          <Petal key={`b-${a}`} angle={a} radius={8} length={14} width={4} opacity={0.68} />
        ))}
      </g>
    </svg>
  )
}

// Footer link with an arrow that slides in on hover/focus — used for both link columns
function FooterLink({ to, children }) {
  return (
    <Link to={to}>
      {children}
      <span className={styles.linkArrow} aria-hidden="true">
        &rarr;
      </span>
    </Link>
  )
}

// Social icon with a click ripple; hover glow/scale/rotate live entirely in CSS
function SocialIcon({ href, label, children }) {
  const [ripples, setRipples] = useState([])
  const rippleId = useRef(0)

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const id = rippleId.current++
    const ripple = { id, x: e.clientX - rect.left, y: e.clientY - rect.top }
    setRipples((prev) => [...prev, ripple])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 550)
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={styles.socialLink} onClick={handleClick}>
      {children}
      {ripples.map((r) => (
        <span key={r.id} className={styles.socialRipple} style={{ left: r.x, top: r.y }} />
      ))}
    </a>
  )
}

export default function Footer() {
  const reduceMotion = useReducedMotion()

  const columnVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.01 : 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.14, delayChildren: reduceMotion ? 0 : 0.05 },
    },
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.scallop} aria-hidden="true" />
      <MandalaCorner className={styles.cornerLeft} />
      <MandalaCorner className={styles.cornerRight} />
      <Mandala className={styles.ambientMandala} size={640} color="var(--color-accent)" duration={7200} />

      <motion.div
        className={`container ${styles.grid}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.about} variants={columnVariants}>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="A1 Anddal & Co" className={styles.logo} />
          </Link>
        </motion.div>

        <motion.div className={styles.col} variants={columnVariants}>
          <h4>Quick Links</h4>
          <ul>
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/products">Products</FooterLink></li>
            <li><FooterLink to="/about">About Us</FooterLink></li>
            <li><FooterLink to="/contact">Contact Us</FooterLink></li>
          </ul>
        </motion.div>

        <motion.div className={styles.col} variants={columnVariants}>
          <h4>Products</h4>
          <ul>
            <li><FooterLink to="/products">Incense Sticks</FooterLink></li>
            <li><FooterLink to="/products">Sambirani Cups</FooterLink></li>
            <li><FooterLink to="/products">Dhoop Cones</FooterLink></li>
            <li><FooterLink to="/products">Pooja Essentials</FooterLink></li>
            <li><FooterLink to="/products">Others</FooterLink></li>
          </ul>
        </motion.div>

        <motion.div className={`${styles.col} ${styles.colFollow}`} variants={columnVariants}>
          <h4>Follow Us</h4>
          <div className={styles.social}>
            <SocialIcon href="https://www.facebook.com/share/14n5uKMjSUk/" label="Facebook">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/a1anddalerode" label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://youtube.com/@a1anddaldivineproducts" label="YouTube">
              <FaYoutube />
            </SocialIcon>
          </div>
        </motion.div>
      </motion.div>

      <div className={styles.bottom}>
        <motion.span
          className={styles.divider}
          initial={{ scaleX: reduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduceMotion ? 0.01 : 1, ease: 'easeOut' }}
        />
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.7, delay: reduceMotion ? 0 : 0.25 }}
        >
          <p>© {new Date().getFullYear()} A1 Andaal Pooja Products. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
