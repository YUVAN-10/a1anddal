import styles from './FloralOrnament.module.css'

function Blossom({ cx, cy, r = 7 }) {
  const petals = [0, 72, 144, 216, 288]
  return (
    <g>
      {petals.map((a) => {
        const rad = (a * Math.PI) / 180
        return <circle key={a} cx={cx + r * Math.cos(rad)} cy={cy + r * Math.sin(rad)} r={r * 0.62} />
      })}
      <circle cx={cx} cy={cy} r={r * 0.4} fill="currentColor" stroke="none" />
    </g>
  )
}

// Small corner floral spray — a stem with a few outline blossoms.
export default function FloralOrnament({ className = '', size = 180, color }) {
  return (
    <svg
      className={`${styles.floral} ${className}`}
      style={{ width: size, height: size, color }}
      viewBox="0 0 160 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.7"
      aria-hidden="true"
    >
      <path d="M10 150 C40 120, 30 80, 70 50 C90 35, 110 30, 140 15" />
      <Blossom cx={70} cy={50} r={9} />
      <Blossom cx={110} cy={30} r={7} />
      <Blossom cx={30} cy={95} r={6} />
      <path d="M60 70 C50 78, 40 76, 34 84" />
      <path d="M95 40 C100 32, 108 32, 112 26" />
    </svg>
  )
}
