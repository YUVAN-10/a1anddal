import storyImage from '../../assets/about-workshop.jpg'
import styles from './StorySection.module.css'

export default function StorySection() {
  return (
    <section className="section">
      <div className={`container ${styles.storyGrid}`}>
        <img src={storyImage} alt="A1 Anddal & Co — premium pooja essentials" className={styles.storyImage} />
        <div>
          <span className="eyebrow">Our Story</span>
          <h1 className={styles.storyHeading}>Crafting Divine Fragrance, One Stick at a Time</h1>
          <p>
            A1 Anddal & Co. is dedicated to bringing purity, tradition, and divine fragrance into every home. We manufacture premium incense and pooja products that create a peaceful and spiritually uplifting atmosphere for daily prayers, meditation, temples, and home wellness.
          </p>
          <p>
           Crafted using carefully selected natural ingredients and traditional methods, our products are known for their rich aroma, long-lasting fragrance, and superior quality. Every product reflects our commitment to preserving Indian traditions while delivering an authentic aromatic experience.

Our product range includes premium sambrani cups, dhuna dhoops, incense cones, loban sticks, sambrani powder, camphor, and aromatic products designed to fill every space with positive energy. Every fragrance is thoughtfully created to inspire devotion, serenity, and inner peace.
          </p>
        </div>
      </div>
    </section>
  )
}
