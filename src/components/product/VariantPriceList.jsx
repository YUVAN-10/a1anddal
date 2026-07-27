import { formatCurrency } from '../../utils/formatCurrency'
import styles from './VariantPriceList.module.css'

function getSizeColumnLabel(variants) {
  if (variants.some((v) => /gram/i.test(v.label))) return 'Available Grams'
  return 'No. of Pieces'
}

export default function VariantPriceList({ variants }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>{getSizeColumnLabel(variants)}</th>
          <th>M.R.P (₹)</th>
        </tr>
      </thead>
      <tbody>
        {variants.map((v) => (
          <tr key={v.label}>
            <td>{v.label}</td>
            <td>
              {v.price == null ? 'Price on request' : `${formatCurrency(v.price)}${v.priceUnit ? ` (${v.priceUnit})` : ''}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
