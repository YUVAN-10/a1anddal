import { categories, fragranceNotes } from './mockData/categories'
import { delay } from './mockDb'

export async function getCategories() {
  await delay()
  return [...categories].sort((a, b) => a.order - b.order)
}

export async function getFragranceNotes() {
  await delay(50)
  return fragranceNotes
}
