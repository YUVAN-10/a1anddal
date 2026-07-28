import { FaWhatsapp } from 'react-icons/fa'
import styles from './WhatsAppFloatButton.module.css'

export default function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/919780451111"
      target="_blank"
      rel="noreferrer"
      className={styles.button}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}
