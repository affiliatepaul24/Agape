import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const INFO = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'Osu Castle Road, Accra — Ghana',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '0544100747 / 0203395273',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'agapeartsp@gmail.com',
  },
]

export default function Contact() {
  const [sectionRef, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark" ref={sectionRef}>
      {/* CTA Banner */}
      <div className={`max-w-4xl mx-auto px-6 text-center mb-20 fade-in ${inView ? 'visible' : ''}`}>
        <span className="section-label">Get In Touch</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Ready to Create Something{' '}
          <span className="text-gold italic">Extraordinary?</span>
        </h2>
        <p className="font-sans text-white/55 max-w-xl mx-auto leading-relaxed">
          Whether it's a corporate event, a school tour, or a groundbreaking stage production
          — let's bring your vision to life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div className={`fade-in fade-in-delay-1 ${inView ? 'visible' : ''}`}>
            <h3 className="font-serif text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6 mb-10">
              {INFO.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-surface border border-white/10 flex items-center justify-center text-gold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-sans text-xs text-gold tracking-wider uppercase mb-1">{item.label}</div>
                    <div className="font-sans text-white/70 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business hours */}
            <div className="border-t border-white/10 pt-8">
              <h4 className="font-serif text-lg font-bold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 font-sans text-sm text-white/55">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-white/70">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white/70">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/40">By Appointment</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="border-t border-white/10 pt-8 mt-8">
              <h4 className="font-serif text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  {
                    label: 'Facebook',
                    href: 'https://www.facebook.com/agapeartsproduction',
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                  },
                  {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/agapeartsproduction',
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
                  },
                  {
                    label: 'YouTube',
                    href: 'https://www.youtube.com/@agapeartsproduction',
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
                  },
                  {
                    label: 'TikTok',
                    href: 'https://www.tiktok.com/@agapeartsproduction',
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-sm bg-surface border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/40 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`fade-in fade-in-delay-2 ${inView ? 'visible' : ''}`}>
            <div className="bg-surface border border-white/10 rounded-sm p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold text-white mb-8">Send Us a Message</h3>
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-serif text-xl text-gold font-bold mb-2">Message Sent!</p>
                  <p className="font-sans text-white/55 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs text-white/50 tracking-wider uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-dark border border-white/15 rounded-sm px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-white/25"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-white/50 tracking-wider uppercase mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-dark border border-white/15 rounded-sm px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-white/25"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs text-white/50 tracking-wider uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-dark border border-white/15 rounded-sm px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-white/25"
                      placeholder="+233 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs text-white/50 tracking-wider uppercase mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-dark border border-white/15 rounded-sm px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder-white/25 resize-none"
                      placeholder="Tell us about your event or enquiry..."
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full py-4">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
