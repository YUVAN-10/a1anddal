import { useState, useRef } from 'react'
import styles from './ImageGallery.module.css'

const LABELS = ['Front View', 'Back View', 'Side View']

export default function ImageGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const frameRef = useRef(null)

  function handleMouseMove(e) {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    frame.style.setProperty('--zoom-x', `${x}%`)
    frame.style.setProperty('--zoom-y', `${y}%`)
  }

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.frame} ${zoomed ? styles.zoomed : ''}`}
        ref={frameRef}
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setZoomed((v) => !v)}
      >
        <img src={images[activeIndex]} alt={`${name} — ${LABELS[activeIndex]}`} />
      </div>
      <p className={styles.hint}>Hover to zoom</p>
      <div className={styles.thumbs}>
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            className={i === activeIndex ? styles.thumbActive : styles.thumb}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show ${LABELS[i]}`}
            aria-pressed={i === activeIndex}
          >
            <img src={img} alt="" />
            <span>{LABELS[i]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
