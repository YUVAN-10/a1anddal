import { useEffect } from 'react'
import PageHero from '../components/common/PageHero'
import GetInTouch from '../components/contact/GetInTouch'
import ContactMap from '../components/contact/ContactMap'

export default function ContactUs() {
  useEffect(() => {
    document.title = 'Contact Us — A1 Anddal'
  }, [])

  return (
    <>
      <PageHero title="Contact Us" subtitle="We would love to hear from you" />
      <GetInTouch />
      <ContactMap />
    </>
  )
}
