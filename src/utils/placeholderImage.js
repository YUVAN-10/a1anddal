const TONES = {
  section: { bg: 'FFF8E7', text: '5D4037' },
  primary: { bg: 'E67E22', text: 'FFFDF8' },
  accent: { bg: 'C9A227', text: 'FFFDF8' },
  heading: { bg: '5D4037', text: 'FFF8E7' },
  border: { bg: 'F1EADC', text: '5D4037' },
}

/**
 * Generates a themed placeholder image URL. Swap the `images`/`image`
 * field for a real photo URL later — no component code needs to change.
 */
export function getPlaceholderImage({
  width = 600,
  height = 600,
  label = 'A1 Anddal',
  tone = 'section',
} = {}) {
  const { bg, text } = TONES[tone] ?? TONES.section
  const encoded = encodeURIComponent(label)
  return `https://placehold.co/${width}x${height}/${bg}/${text}?font=playfair-display&text=${encoded}`
}
