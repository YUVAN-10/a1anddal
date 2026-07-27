import { formatCurrency } from '../../utils/formatCurrency'
import styles from './VariantPriceList.module.css'

export default function VariantPriceList({ variants }) {
  return (
    <div className={styles.wrap}>
      {variants.map((v) => (
        <div className={styles.row} key={v.label}>
          <span>{v.label}</span>
          <span className={styles.price}>
            {v.price == null ? 'Price on request' : `${formatCurrency(v.price)}${v.priceUnit ? ` (${v.priceUnit})` : ''}`}
          </span>
        </div>
      ))}
    </div>
  )
}