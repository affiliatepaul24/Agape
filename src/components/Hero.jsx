import { useEffect, useState } from 'react'
import heroBg from '../assets/gallery/hero.jpg'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent ml-12 hidden lg:block" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent mr-12 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        <div
          className={`transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="section-label text-center block">Ghana's Premier Theatre Company</span>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gold/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gold/60" />
          </div>
        </div>

        {/* Headline */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Be the{' '}
          <span className="text-gold italic">Change</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`font-sans text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Bold, thought-provoking performances that reflect the realities of
          contemporary African life — inspiring meaningful conversations through
          immersive theatre.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button onClick={() => scrollTo('contact')} className="btn-gold">
            Book a Performance
          </button>
          <button onClick={() => scrollTo('gallery')} className="btn-outline">
            Explore Our Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white/40 font-sans text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
