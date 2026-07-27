import { GiLotus, GiFactory, GiHerbsBundle } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import styles from './WhyChooseUs.module.css'

const POINTS = [
  {
    icon: <GiLotus />,
    title: 'Premium Quality',
    desc: 'Every incense, dhoop and dhuna is crafted to the highest standard for a rich, lasting fragrance.',
  },
  {
    icon: <GiFactory />,
    title: 'Traditional Manufacturing',
    desc: 'Hand-rolled using age-old techniques passed down through generations of skilled artisans.',
  },
  {
    icon: <GiHerbsBundle />,
    title: 'Natural Ingredients',
    desc: 'Pure resins, oils and herbs — no harmful chemicals, just authentic, natural fragrance.',
  },
  {
    icon: <FaUsers />,
    title: 'Trusted By Families',
    desc: 'Thousands of families welcome our fragrances into their homes for daily rituals and celebrations.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section section--tinted">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Our Promise</span>
          <h2>Why Choose Us</h2>
          <p>A calm, trustworthy shopping experience built around devotion and quality</p>
        </div>
        <div className={styles.grid}>
          {POINTS.map((p) => (
            <div className={styles.card} key={p.title}>
              <span className={styles.icon}>{p.icon}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
