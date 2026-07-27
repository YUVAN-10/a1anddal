import { getPlaceholderImage } from '../../utils/placeholderImage'
import styles from './StorySection.module.css'

const storyImage = getPlaceholderImage({ width: 900, height: 700, label: 'Our Fragrance Workshop', tone: 'heading' })

export default function StorySection() {
  return (
    <section className="section">
      <div className={`container ${styles.storyGrid}`}>
        <img src={storyImage} alt="Artisans hand-rolling incense sticks" className={styles.storyImage} />
        <div>
          <span className="eyebrow">Our Story</span>
          <h1 className={styles.storyHeading}>Crafting Divine Fragrance, One Stick at a Time</h1>
          <p>
            A1 Anddal began with a simple belief — that fragrance has the power to turn an ordinary moment into a
            sacred one. What started as a family passion for traditional incense-making has grown into a trusted
            destination for devotees and fragrance lovers across the country.
          </p>
          <p>
            We work closely with skilled artisans who hand-roll every stick, cone and dhuna using time-honoured
            techniques and natural ingredients. Our mission is to make authentic, high-quality fragrance accessible
            to every home, without compromising on purity or craftsmanship.
          </p>
        </div>
      </div>
    </section>
  )
}
