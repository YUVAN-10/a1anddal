export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount ?? 0)
}

export function formatStartingPrice(product) {
  if (product.minPrice == null) return 'Price on request'
  if (product.variants?.length > 1) return `From ${formatCurrency(product.minPrice)}`
  return formatCurrency(product.minPrice)
}
