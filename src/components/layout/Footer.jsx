import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '../../assets/logo-cropped.png'
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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.scallop} aria-hidden="true" />
      <MandalaCorner className={styles.cornerLeft} />
      <MandalaCorner className={styles.cornerRight} />

      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="A1 Anddal & Co" className={styles.logo} />
          </Link>
         
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Products</h4>
          <ul>
            <li><Link to="/products">Incense Sticks</Link></li>
            <li><Link to="/products">Sambirani Cups</Link></li>
            <li><Link to="/products">Dhoop Cones</Link></li>
            <li><Link to="/products">Pooja Essentials</Link></li>
            <li><Link to="/products">Others</Link></li>
          </ul>
        </div>

        <div className={`${styles.col} ${styles.colFollow}`}>
          <h4>Follow Us</h4>
          <div className={styles.social}>
            <a href="https://www.facebook.com/share/14n5uKMjSUk/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/a1anddalerode" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com/@a1anddaldivineproducts" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} A1 Andaal Pooja Products. All Rights Reserved.</p>
        </div>
      </div>

      {/* removed decorative flowerBorder as requested */}
    </footer>
  )
}
