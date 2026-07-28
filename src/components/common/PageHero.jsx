import heroImage from '../../assets/contact-hero.png'
import styles from './PageHero.module.css'

export default function PageHero({ title, subtitle }) {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className={`container ${styles.intro}`}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
