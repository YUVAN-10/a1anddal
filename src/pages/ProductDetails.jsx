import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import ImageGallery from '../components/product/ImageGallery'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import VariantPriceList from '../components/product/VariantPriceList'
import Loader from '../components/common/Loader'
import WhatsAppFloatButton from '../components/common/WhatsAppFloatButton'
import { useProduct } from '../hooks/useProductDetails'
import styles from './ProductDetails.module.css'

export default function ProductDetails() {
  const { slug } = useParams()
  const { product, loading } = useProduct(slug)
  const navigate = useNavigate()

  useEffect(() => {
    if (product) document.title = `${product.name} — A1 Anddal`
  }, [product])

  if (loading && !product) return <Loader fullPage />

  if (!product) {
    return (
      <div className={`container section ${styles.notFound}`}>
        <h2>Product not found</h2>
        <p>The item you're looking for may have been removed.</p>
        <Button to="/products" variant="primary">
          Browse Products
        </Button>
      </div>
    )
  }

  return (
    <div className="container section">
      <Button variant="ghost" size="sm" className={styles.backBtn} onClick={() => navigate(-1)}>
        <span className={styles.backIcon}>
          <FaArrowLeft aria-hidden="true" />
        </span>
        Back
      </Button>

      <div className={styles.grid}>
        <ImageGallery images={product.images} name={product.name} />

        <div className={styles.info}>
          {product.isBestSeller && <Badge tone="accent">Best Seller</Badge>}
          <h1>{product.name}</h1>

          <h3 className={styles.variantsHeading}>Available Sizes & Pricing</h3>
          <VariantPriceList variants={product.variants} />
          
          <h3 className={styles.variantsHeading}>Description</h3>
          <p className={styles.shortDesc}>{product.description}</p>
        </div>
      </div>

      <WhatsAppFloatButton />
    </div>
  )
}
