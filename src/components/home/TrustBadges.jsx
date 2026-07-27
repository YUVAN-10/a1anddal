import { FaLeaf, FaLock, FaShippingFast, FaBoxOpen } from 'react-icons/fa'
import styles from './TrustBadges.module.css'

const BADGES = [
  { icon: <FaLeaf />, title: '100% Pure Products', desc: 'Authentic, natural fragrances' },
  { icon: <FaLock />, title: 'Secure Payment', desc: '100% protected checkout' },
  { icon: <FaShippingFast />, title: 'Fast Delivery', desc: 'Dispatched within 24 hrs' },
  { icon: <FaBoxOpen />, title: 'Safe Packaging', desc: 'Fragrances packed with utmost care' },
]

export default function TrustBadges() {
  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.grid}`}>
        {BADGES.map((b) => (
          <div className={styles.badge} key={b.title}>
            <span className={styles.icon}>{b.icon}</span>
            <div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
