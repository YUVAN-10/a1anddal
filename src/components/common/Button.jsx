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
  ...rest
}) {
  const className = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    extraClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} className={className} disabled={disabled} {...rest}>
      {content}
    </button>
  )
}
