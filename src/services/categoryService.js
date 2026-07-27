import { categories } from './mockData/categories'
import { delay } from './mockDb'

export async function getCategories() {
  await delay()
  return [...categories].sort((a, b) => a.order - b.order)
}
