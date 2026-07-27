import { useEffect, useState } from 'react'
import { getProductBySlug, getRelatedProducts } from '../services/productService'
import { getReviews } from '../services/reviewService'

export function useProduct(slug) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getProductBySlug(slug)
      .then((result) => {
        if (!cancelled) setProduct(result)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [slug])

  return { product, loading }
}

export function useRelatedProducts(categoryId, excludeId) {
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (!categoryId) return
    getRelatedProducts(categoryId, excludeId).then((result) => setRelated(result.slice(0, 4)))
  }, [categoryId, excludeId])

  return related
}

export function useReviews(productId) {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!productId) {
      setLoading(false)
      return
    }
    setLoading(true)
    getReviews(productId)
      .then(setReviews)
      .finally(() => setLoading(false))
  }, [productId])

  return { reviews, loading, setReviews }
}
