// Simulates network latency for mock service calls so loading states feel
// like real async data fetching (this app has no backend — everything is
// served from static mock data in services/mockData/).
export function delay(ms = 200) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
