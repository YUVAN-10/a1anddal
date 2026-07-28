import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ImageGallery from '../components/product/ImageGallery'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import ReviewList from '../components/product/ReviewList'
import RelatedProducts from '../components/product/RelatedProducts'
import VariantPriceList from '../components/product/VariantPriceList'
import Loader from '../components/common/Loader'
import WhatsAppFloatButton from '../components/common/WhatsAppFloatButton'
import { useProduct, useRelatedProducts, useReviews } from '../hooks/useProductDetails'
import styles from './ProductDetails.module.css'

export default function ProductDetails() {
  const { slug } = useParams()
  const { product, loading } = useProduct(slug)
  const [activeTab, setActiveTab] = useState('description')

  const related = useRelatedProducts(product?.categoryId, product?.id)
  const { reviews } = useReviews(product?.id)

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
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
      </nav>

      <div className={styles.grid}>
        <ImageGallery images={product.images} name={product.name} />

        <div className={styles.info}>
          {product.isBestSeller && <Badge tone="accent">Best Seller</Badge>}
          <h1>{product.name}</h1>

          <p className={styles.shortDesc}>{product.description}</p>

          <div className={styles.stockRow}>
            {product.stock > 0 ? (
              <span className={styles.inStock}>In Stock ({product.stock} available)</span>
            ) : (
              <span className={styles.outStock}>Out of Stock</span>
            )}
          </div>

          <h3 className={styles.variantsHeading}>Available Sizes & Pricing</h3>
          <VariantPriceList variants={product.variants} />
        </div>
      </div>

      <div className={styles.tabs}>
        <div className={styles.tabHeaders}>
          <button
            className={activeTab === 'description' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={activeTab === 'specs' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('specs')}
          >
            Specifications
          </button>
          <button
            className={activeTab === 'reviews' ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({reviews.length})
          </button>
        </div>

        <div className={styles.tabPanel}>
          {activeTab === 'description' && <p>{product.description}</p>}

          {activeTab === 'specs' && (
            <table className={styles.specsTable}>
              <tbody>
                {Object.entries(product.specifications ?? {}).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'reviews' && <ReviewList reviews={reviews} />}
        </div>
      </div>

      <RelatedProducts products={related} />
      <WhatsAppFloatButton />
    </div>
  )
}
