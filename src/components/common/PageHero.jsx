import heroImage from '../../assets/temple-hero.png'
import TempleBell from './TempleBell'
import styles from './PageHero.module.css'

export default function PageHero({ title, subtitle, backgroundImage = heroImage }) {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <TempleBell className={styles.bellLeft} delay="0s" />
      <TempleBell className={styles.bellRight} delay="1.2s" />
      <div className={`container ${styles.intro}`}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
