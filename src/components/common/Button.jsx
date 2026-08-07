import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  className: extraClassName,
  onClick,
  ...rest
}) {
  const [ripples, setRipples] = useState([])
  const rippleId = useRef(0)

  const className = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    extraClassName,
  ]
    .filter(Boolean)
    .join(' ')

  // Ripple lives on the shared component so every button in the app gets it for free.
  const handleClick = (e) => {
    if (!disabled) {
      const rect = e.currentTarget.getBoundingClientRect()
      const id = rippleId.current++
      const x = e.clientX ? e.clientX - rect.left : rect.width / 2
      const y = e.clientY ? e.clientY - rect.top : rect.height / 2
      setRipples((prev) => [...prev, { id, x, y }])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 600)
    }
    onClick?.(e)
  }

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
      {ripples.map((r) => (
        <span key={r.id} className={styles.ripple} style={{ left: r.x, top: r.y }} aria-hidden="true" />
      ))}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className} onClick={handleClick} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={className} onClick={handleClick} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} className={className} disabled={disabled} onClick={handleClick} {...rest}>
      {content}
    </button>
  )
}
