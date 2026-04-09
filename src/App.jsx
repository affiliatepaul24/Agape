import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
