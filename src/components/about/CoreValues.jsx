import { GiLotus, GiPrayerBeads, GiHerbsBundle } from 'react-icons/gi'
import { FaHandHoldingHeart } from 'react-icons/fa'
import styles from './CoreValues.module.css'

const VALUES = [
  { icon: <GiLotus />, title: 'Devotion', desc: 'Every fragrance is crafted with the same reverence you bring to your daily rituals.' },
  { icon: <GiPrayerBeads />, title: 'Authenticity', desc: 'We work directly with artisans to keep traditional incense-making alive and genuine.' },
  { icon: <GiHerbsBundle />, title: 'Purity', desc: 'Natural resins, oils and herbs — quality and purity are never compromised.' },
  { icon: <FaHandHoldingHeart />, title: 'Care', desc: 'A calm, honest shopping experience — no pressure, just peace of mind.' },
]

export default function CoreValues() {
  return (
    <section className="section section--tinted">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">What We Stand For</span>
          <h2>Our Core Values</h2>
        </div>
        <div className={styles.valuesGrid}>
          {VALUES.map((v) => (
            <div className={styles.valueCard} key={v.title}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
