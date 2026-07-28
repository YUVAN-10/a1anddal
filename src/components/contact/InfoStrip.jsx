import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegClock } from 'react-icons/fa'
import styles from './InfoStrip.module.css'

const ITEMS = [
  {
    icon: <FaMapMarkerAlt aria-hidden="true" />,
    label: 'Address',
    lines: ['17/2, ST-4, Water Tank Street,', 'Vellottamparappu, Erode - 638154, Tamil Nadu'],
  },
  {
    icon: <FaPhoneAlt aria-hidden="true" />,
    label: 'Phone',
    lines: ['+91 97804 51111'],
  },
  {
    icon: <FaEnvelope aria-hidden="true" />,
    label: 'Email',
    lines: ['a1anddalerode@gmail.com'],
  },
  {
    icon: <FaRegClock aria-hidden="true" />,
    label: 'Hours',
    lines: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
  },
]

export default function InfoStrip() {
  return (
    <div className={styles.strip}>
      {ITEMS.map((item) => (
        <div key={item.label} className={styles.item}>
          <span className={styles.icon}>{item.icon}</span>
          <div>
            <h4>{item.label}</h4>
            {item.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
