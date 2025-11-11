import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollSamosa from './components/ScrollSamosa'

function App() {
  const orderRef = useRef(null)
  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-white text-amber-900">
      <AnimatedBackground />
      <ScrollSamosa />
      <Navbar />
      <main>
        <Hero onCta={scrollToOrder} />
        <Menu />
        <section id="order" ref={orderRef} className="relative py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-amber-200 bg-white/70 backdrop-blur p-6">
              <h3 className="text-2xl font-bold mb-3">Ready to order?</h3>
              <p className="text-amber-800/80 mb-4">We currently accept walk-ins and phone orders. Online ordering is coming soon!</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#menu" className="rounded-lg bg-amber-600 text-white px-4 py-2 font-semibold text-center">Browse Menu</a>
                <a href="#contact" className="rounded-lg border border-amber-200 px-4 py-2 font-semibold text-center">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
