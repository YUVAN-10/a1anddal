import styles from './KeepInTouch.module.css'

const SOCIALS = [
  // { label: 'Facebook', href: 'https://www.facebook.com/share/14n5uKMjSUk/', style: { left: '35.7%' } },
  // { label: 'Instagram', href: 'https://www.instagram.com/a1anddalerode', style: { left: '45.2%' } },
  // { label: 'WhatsApp', href: 'https://wa.me/919780451111', style: { left: '54.8%' } },
  // { label: 'Email', href: 'mailto:a1anddalerode@gmail.com', style: { left: '64.3%' } },
]

export default function KeepInTouch() {
  return (
    <section className={styles.section}>
      <h2 className="visually-hidden">Let&rsquo;s Keep in Touch</h2>
      <p className="visually-hidden">Follow us on our social media and others</p>

      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={s.label}
          className={styles.iconLink}
          style={s.style}
        />
      ))}
    </section>
  )
}
