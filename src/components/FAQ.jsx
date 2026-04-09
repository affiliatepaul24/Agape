import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const FAQS = [
  {
    q: 'What types of events can Agape Arts Production perform at?',
    a: 'We perform at theatres, corporate events, schools, festivals, private functions, and community gatherings. Our productions range from intimate indoor performances to large outdoor events with hundreds of attendees.',
  },
  {
    q: 'Can we commission a custom production for our brand or organisation?',
    a: 'Absolutely. We work closely with brands, NGOs, government agencies, and corporate clients to create bespoke theatrical experiences — from fully branded entertainment to social impact campaigns and product launches.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'We recommend booking at least 4–6 weeks in advance for standard engagements, and 3–6 months for large-scale productions or touring shows. Contact us early to secure your preferred date.',
  },
  {
    q: 'Do you tour outside Accra?',
    a: 'Yes. We tour across Ghana and have experience with regional and international touring. Our mobile theatre setups allow us to bring world-class productions anywhere — from major cities to rural communities.',
  },
  {
    q: 'What makes Agape Arts different from other production companies?',
    a: "Our productions combine world-class direction with deeply authentic African storytelling. We don't just stage plays — we craft cultural experiences that move, provoke, and inspire. Every production is a social event, not just a show.",
  },
]

export default function FAQ() {
  const [sectionRef, inView] = useInView()
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 bg-surface" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-6">
        <div className={`text-center mb-16 fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`fade-in ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="border border-white/10 rounded-sm overflow-hidden hover:border-gold/30 transition-colors duration-300">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-sans text-white/85 font-medium text-sm md:text-base group-hover:text-gold transition-colors duration-200">
                    {faq.q}
                  </span>
                  <span className={`text-gold transition-transform duration-300 flex-shrink-0 ${open === i ? 'rotate-180' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-48' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-5 font-sans text-white/55 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
