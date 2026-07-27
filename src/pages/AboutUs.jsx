import { useEffect } from 'react'
import StorySection from '../components/about/StorySection'
import CoreValues from '../components/about/CoreValues'

export default function AboutUs() {
  useEffect(() => {
    document.title = 'About Us — A1 Anddal'
  }, [])

  return (
    <>
      <StorySection />
      <CoreValues />
    </>
  )
}
