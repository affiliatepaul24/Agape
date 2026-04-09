import { useState, useCallback, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

// Import all gallery images
const imageModules = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true })
const allImages = Object.entries(imageModules)
  .filter(([path]) => !path.includes('hero') && !path.includes('logo'))
  .map(([path, mod]) => ({
    src: mod.default,
    alt: path.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
  }))

export default function Gallery() {
  const [sectionRef, inView] = useInView()
  const [lightbox, setLightbox] = useState(null) // index or null

  const openLightbox = useCallback((idx) => setLightbox(idx), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox((i) => (i - 1 + allImages.length) % allImages.length), [])
  const next = useCallback(() => setLightbox((i) => (i + 1) % allImages.length), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, prev, next, closeLightbox])

  return (
    <section id="gallery" className="py-24 md:py-32 bg-dark" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Gallery</h2>
          <p className="font-sans text-white/55 max-w-xl mx-auto mt-4 leading-relaxed">
            Moments captured from our productions — raw emotion, bold storytelling,
            unforgettable experiences.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        {/* Grid */}
        {allImages.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {allImages.map((img, i) => (
              <div
                key={img.src}
                className={`break-inside-avoid fade-in ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
              >
                <div
                  className="relative group overflow-hidden rounded-sm cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#FFD100" strokeWidth="2" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-white/30 font-sans">
            <p>Gallery images will appear here.</p>
            <p className="text-sm mt-2">Add .jpg/.jpeg/.png files to /src/assets/gallery/</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-gold transition-colors p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {allImages.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold transition-colors p-3 bg-dark/60 rounded-sm"
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Previous"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold transition-colors p-3 bg-dark/60 rounded-sm"
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Next"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          <img
            src={allImages[lightbox].src}
            alt={allImages[lightbox].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 font-sans text-sm">
            {lightbox + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
