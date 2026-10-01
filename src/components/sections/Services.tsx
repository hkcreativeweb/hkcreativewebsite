import { ArrowRight } from 'lucide-react'

// Only list what HK Creative genuinely offers (see /pricing).
const services = [
  {
    n: '01',
    title: 'Content',
    lead: 'Content that gives a business something worth sharing.',
    items: ['Short-form social video', 'Social content and graphics', 'Campaign assets', 'Content planning and direction'],
  },
  {
    n: '02',
    title: 'Websites',
    lead: 'Websites designed around the actual business.',
    items: ['Business websites and landing pages', 'E-commerce and ordering', 'Custom web experiences', 'Responsive development'],
  },
  {
    n: '03',
    title: 'Digital Marketing',
    lead: 'Helping businesses reach people online.',
    items: ['Social media support', 'Content-led campaigns', 'Website optimisation', 'Practical automation, such as automated replies'],
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-cream py-20 lg:py-24 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark mb-3">Services</p>
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
            Three things, done properly.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border-t border-navy">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`py-8 md:py-10 md:px-8 ${i === 0 ? 'md:pl-0' : 'md:border-l md:border-hairline'} ${i === services.length - 1 ? 'md:pr-0' : ''} ${i > 0 ? 'border-t border-hairline md:border-t-0' : ''}`}
            >
              <p className="text-sm font-semibold text-slate tabular-nums">{s.n}</p>
              <h3 className="mt-3 text-xl font-bold text-navy uppercase tracking-wide">{s.title}</h3>
              <p className="mt-3 text-navy leading-relaxed">{s.lead}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate leading-relaxed">
                {s.items.map((item) => (
                  <li key={item} className="pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-teal">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 border-t border-hairline pt-10 grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold text-navy tracking-tight">Not sure what your website needs?</h3>
            <p className="mt-3 text-slate leading-relaxed max-w-2xl">
              Book a 30-minute consultation. We&apos;ll talk through your business, your current setup and what&apos;s actually worth investing in, before you spend anything.
            </p>
          </div>
          <div className="lg:text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
            >
              Book a Consultation <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
