import { reviews } from './mockData/reviews'
import { delay } from './mockDb'

export async function getReviews(productId) {
  await delay()
  return reviews.filter((r) => r.productId === productId).sort((a, b) => b.createdAt - a.createdAt)
}
