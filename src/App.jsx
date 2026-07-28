import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AppRoutes from './routes/AppRoutes'
import WhatsAppFloatButton from './components/common/WhatsAppFloatButton'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <AppRoutes />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
