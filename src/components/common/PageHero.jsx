import heroImage from '../../assets/slider-hero.jpeg'
import styles from './PageHero.module.css'

export default function PageHero({ title, subtitle, backgroundImage = heroImage }) {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* <div className={`container ${styles.intro}`}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div> */}
    </section>
  )
}
