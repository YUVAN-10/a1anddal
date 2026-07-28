import { useEffect } from 'react'
import PageHero from '../components/common/PageHero'
import StorySection from '../components/about/StorySection'
import MissionVision from '../components/about/MissionVision'
import CoreValues from '../components/about/CoreValues'

export default function AboutUs() {
  useEffect(() => {
    document.title = 'About Us — A1 Anddal'
  }, [])

  return (
    <>
      <PageHero title="About Us" subtitle="The story, values and devotion behind every fragrance we craft" />
      <StorySection />
      <MissionVision />
      <CoreValues />
    </>
  )
}
