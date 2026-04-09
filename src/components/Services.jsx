import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
      </svg>
    ),
    title: 'Theatre Productions',
    description:
      'Original stage plays, live performances, and touring productions for theatres, schools, and events across Ghana and beyond — each crafted with world-class direction and design.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'Corporate Entertainment',
    description:
      'Custom theatrical performances, staff engagement, edutainment experiences, and brand storytelling through powerful live narratives for corporate clients and events.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Brand Partnerships',
    description:
      'Product placement within productions, sponsored shows, branded storytelling, and on-ground audience activations that embed your brand into cultural moments.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Educational Shows',
    description:
      'School tours, educational theatre, social awareness campaigns, and behaviour-change productions for youth and communities — theatre as a tool for learning and growth.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Creative Innovation',
    description:
      'Immersive and mobile theatre experiences, experimental productions, and audience-interactive performances that push boundaries and redefine live entertainment.',
  },
]

const WHY_US = [
  { icon: '🏆', title: 'Award-Worthy Craft', desc: 'Meticulously directed with world-class stage design and storytelling.' },
  { icon: '🎭', title: 'Audience-First', desc: 'Experiences that engage, provoke thought, and leave lasting impressions.' },
  { icon: '🌍', title: 'Pan-African Vision', desc: 'Ghanaian culture with universal themes that resonate across borders.' },
  { icon: '💡', title: 'Social Impact', desc: 'Theatre as a lever for change — addressing real issues through powerful narratives.' },
]

export default function Services() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="services" className="py-24 md:py-32 bg-surface" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="font-sans text-white/55 max-w-xl mx-auto mt-4 leading-relaxed">
            From original stage plays to corporate entertainment, we craft unforgettable
            experiences that captivate audiences and drive impact.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`fade-in ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="group bg-dark border border-white/10 rounded-sm p-8 h-full hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                <div className="text-gold mb-5 transition-transform duration-300 group-hover:scale-110 inline-block">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="font-sans text-white/55 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className={`fade-in fade-in-delay-2 ${inView ? 'visible' : ''}`}>
          <div className="text-center mb-10">
            <span className="section-label">Why Choose Us</span>
            <h3 className="font-serif text-3xl font-bold text-white">Africa's New Theatre Experience</h3>
            <p className="text-white/50 mt-3 max-w-lg mx-auto text-sm">
              We don't just perform — we create cultural moments that transform communities and redefine what African theatre can be.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <div
                key={item.title}
                className={`fade-in ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className="text-center p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-colors duration-300">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-serif text-lg font-bold text-gold mb-2">{item.title}</h4>
                  <p className="font-sans text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
