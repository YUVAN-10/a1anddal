import { banners } from './mockData/banners'
import { delay } from './mockDb'

export async function getBanners() {
  await delay()
  return banners.filter((b) => b.active).sort((a, b) => a.order - b.order)
}
