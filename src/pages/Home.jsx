import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import TrustBadges from '../components/home/TrustBadges'
import CategoryGrid from '../components/home/CategoryGrid'
import ProductSection from '../components/home/ProductSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import FAQAccordion from '../components/home/FAQAccordion'
import Loader from '../components/common/Loader'
import { useBanners, useCategories, useProducts } from '../hooks/useProducts'
import { testimonials } from '../services/mockData/testimonials'
import { faqs } from '../services/mockData/faqs'

export default function Home() {
  const { banners, loading: bannersLoading } = useBanners()
  const { categories, loading: categoriesLoading } = useCategories()
  const { products, loading: productsLoading } = useProducts()

  useEffect(() => {
    document.title = 'A1 Anddal — Premium Incense, Dhoop & Dhuna'
  }, [])

  const bestSellers = products.filter((p) => p.isBestSeller)
  const featured = products.filter((p) => p.isFeatured)

  if (bannersLoading || categoriesLoading || productsLoading) {
    return <Loader fullPage />
  }

  return (
    <>
      <Hero banners={banners} />
      <TrustBadges />
      <CategoryGrid categories={categories} />
      <ProductSection
        eyebrow="Loved by Many"
        title="Best Seller Products"
        subtitle="Our most cherished fragrances, chosen by thousands of devotees"
        products={bestSellers}
        viewAllLink="/products"
      />
      <ProductSection
        eyebrow="Curated for You"
        title="Featured Collections"
        subtitle="Handpicked fragrance sets to elevate your daily rituals"
        products={featured}
        tinted
        viewAllLink="/products?category=cat-collections"
      />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials} />
      <FAQAccordion faqs={faqs} />
    </>
  )
}
