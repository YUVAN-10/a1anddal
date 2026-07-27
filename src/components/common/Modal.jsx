import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import styles from './Modal.module.css'

export default function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    dialogRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className={styles.backdrop} onMouseDown={onClose}>
      <div
        className={`${styles.dialog} ${styles[size]} scale-in`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose} aria-label="Close dialog">
          <FaTimes />
        </button>
        {title && <h3 className={styles.title}>{title}</h3>}
        {children}
      </div>
    </div>,
    document.body,
  )
}
