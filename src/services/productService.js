import { products } from './mockData/products'
import { delay } from './mockDb'

export async function getProducts() {
  await delay()
  return products
}

export async function getProductBySlug(slug) {
  await delay()
  return products.find((p) => p.slug === slug) ?? null
}

export async function getProductById(id) {
  await delay()
  return products.find((p) => p.id === id) ?? null
}

export async function getBestSellerProducts() {
  await delay()
  return products.filter((p) => p.isBestSeller)
}

export async function getFeaturedProducts() {
  await delay()
  return products.filter((p) => p.isFeatured)
}

export async function getRelatedProducts(categoryId, excludeId) {
  await delay()
  return products.filter((p) => p.categoryId === categoryId && p.id !== excludeId)
}
