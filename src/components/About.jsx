import { useInView } from '../hooks/useInView'
import gallery1 from '../assets/gallery/gallery1.jpeg'

const STATS = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '50+', label: 'Productions Staged' },
  { value: '1000s', label: 'Lives Impacted' },
  { value: 'Pan-African', label: 'Vision & Reach' },
]

export default function About() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="about" className="py-24 md:py-32 bg-dark" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-label">Our Story</span>
          <h2 className="section-title">Africa's New Theatre Experience</h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text */}
          <div className={`fade-in fade-in-delay-1 ${inView ? 'visible' : ''}`}>
            <div className="border-l-4 border-gold pl-8">
              <p className="font-sans text-white/70 text-lg leading-relaxed mb-6">
                Agape Arts Production is a registered Ghanaian theatre company at the forefront of innovative African storytelling, delivering high-impact live experiences that merge culture, commerce, and social relevance. With nearly a decade of industry experience, the company has built a reputation for creating commercially viable productions that resonate deeply with modern audiences.
              </p>
              <p className="font-sans text-white/60 leading-relaxed">
                Founded by visionary producer and director Francis Jeremy Afizie, Agape Arts Production has consistently pushed the boundaries of traditional theatre. The company made history as the first theatre brand to stage a full-scale production on a moving bus—an immersive concept that redefined audience engagement and sold out to over 1,000 patrons. This milestone positioned the company as a pioneer in experiential theatre within West Africa.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold"
              >
                What We Do
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Work With Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className={`relative fade-in fade-in-delay-2 ${inView ? 'visible' : ''}`}>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={gallery1}
                alt="Agape Arts Production performance"
                className="w-full h-[450px] object-cover object-top grayscale-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 rounded-sm -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold/60" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-gold/60" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`fade-in ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="bg-surface border border-white/10 rounded-sm p-6 text-center hover:border-gold/40 transition-colors duration-300">
                <div className="font-serif text-3xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="font-sans text-white/50 text-sm tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
