import { useEffect, useMemo, useState } from 'react'
import { getProducts } from '../services/productService'
import { getCategories, getFragranceNotes } from '../services/categoryService'
import { getBanners } from '../services/bannerService'

function useAsync(fetcher, initial) {
  const [data, setData] = useState(initial)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetcher()
      .then((result) => {
        if (!cancelled) setData(result)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { data, loading }
}

export function useProducts() {
  const { data, loading } = useAsync(getProducts, [])
  return { products: data, loading }
}

export function useCategories() {
  const { data, loading } = useAsync(getCategories, [])
  return { categories: data, loading }
}

export function useFragranceNotes() {
  const { data, loading } = useAsync(getFragranceNotes, [])
  return { fragranceNotes: data, loading }
}

export function useBanners() {
  const { data, loading } = useAsync(getBanners, [])
  return { banners: data, loading }
}

export function useFilteredProducts(products, { search, categoryIds, fragrances, minPrice, maxPrice, inStockOnly, sortBy }) {
  return useMemo(() => {
    let result = [...products]

    if (search?.trim()) {
      const q = search.trim().toLowerCase()
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.tags?.some((t) => t.toLowerCase().includes(q)),
      )
    }
    if (categoryIds?.length) {
      result = result.filter((p) => categoryIds.includes(p.categoryId))
    }
    if (fragrances?.length) {
      result = result.filter((p) => fragrances.includes(p.fragrance))
    }
    if (minPrice != null) {
      result = result.filter((p) => p.price >= minPrice)
    }
    if (maxPrice != null) {
      result = result.filter((p) => p.price <= maxPrice)
    }
    if (inStockOnly) {
      result = result.filter((p) => p.stock > 0)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'popular':
        result.sort((a, b) => b.ratingCount - a.ratingCount)
        break
      case 'newest':
        result.reverse()
        break
      default:
        break
    }
    return result
  }, [products, search, categoryIds, fragrances, minPrice, maxPrice, inStockOnly, sortBy])
}
