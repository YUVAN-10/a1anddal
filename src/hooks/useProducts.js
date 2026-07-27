import { useEffect, useMemo, useState } from 'react'
import { getProducts } from '../services/productService'
import { getCategories } from '../services/categoryService'
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

export function useBanners() {
  const { data, loading } = useAsync(getBanners, [])
  return { banners: data, loading }
}

export function useFilteredProducts(products, { search, sortBy }) {
  return useMemo(() => {
    let result = [...products]

    if (search?.trim()) {
      const q = search.trim().toLowerCase()
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.tags?.some((t) => t.toLowerCase().includes(q)),
      )
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => (a.minPrice ?? Infinity) - (b.minPrice ?? Infinity))
        break
      case 'price-desc':
        result.sort((a, b) => (b.minPrice ?? -Infinity) - (a.minPrice ?? -Infinity))
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
  }, [products, search, sortBy])
}
