import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { phone } from '@/data/contact'

const faqs = [
  {
    q: 'How much does a website cost?',
    a: (
      <>
        It depends on the project. I don&apos;t work from fixed packages: every website is scoped around what you need and quoted individually, and I can tailor the approach to different requirements and budgets. You get a clear quote before anything starts. You can see how it works on the{' '}
        <Link href="/pricing" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">pricing page</Link>.
      </>
    ),
    text: "It depends on the project. I don't work from fixed packages: every website is scoped around what you need and quoted individually, and I can tailor the approach to different requirements and budgets. You get a clear quote before anything starts. You can see how it works on the pricing page.",
  },
  {
    q: 'Do you offer website packages?',
    a: (
      <>
        Not fixed packages. Every business needs something different, so I tailor each website to your requirements and budget, from a straightforward business website to a more comprehensive build. The{' '}
        <Link href="/pricing" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">pricing page</Link>{' '}
        explains how quotes work, and a consultation is the quickest way to work out what fits.
      </>
    ),
    text: 'Not fixed packages. Every business needs something different, so I tailor each website to your requirements and budget, from a straightforward business website to a more comprehensive build. The pricing page explains how quotes work, and a consultation is the quickest way to work out what fits.',
  },
  {
    q: 'How long does a website take?',
    a: 'It depends on the size, features and complexity of the project, as well as how quickly content and feedback are provided. Once I understand what you need, I can give you a realistic timescale.',
    text: 'It depends on the size, features and complexity of the project, as well as how quickly content and feedback are provided. Once I understand what you need, I can give you a realistic timescale.',
  },
  {
    q: 'Do you provide maintenance and support?',
    a: 'Ongoing maintenance and support can be arranged after launch, depending on your project and what you need. Tell me what you would like and I will explain the options.',
    text: 'Ongoing maintenance and support can be arranged after launch, depending on your project and what you need. Tell me what you would like and I will explain the options.',
  },
  {
    q: 'Do I own my website?',
    a: 'You will know exactly what you are receiving, and how ownership of and access to your website, domain and hosting will work, before the project starts. I make that clear as part of every project so there are no surprises.',
    text: 'You will know exactly what you are receiving, and how ownership of and access to your website, domain and hosting will work, before the project starts. I make that clear as part of every project so there are no surprises.',
  },
  {
    q: "Do you build websites for small businesses?",
    a: "Yes. I work directly with individuals and small businesses, and I keep each website focused on what the business actually needs rather than adding features it will not use.",
    text: "Yes. I work directly with individuals and small businesses, and I keep each website focused on what the business actually needs rather than adding features it will not use.",
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. I can redesign an existing website to improve its appearance, mobile experience, performance and overall online presence.',
    text: 'Yes. I can redesign an existing website to improve its appearance, mobile experience, performance and overall online presence.',
  },
  {
    q: 'Can you build an online shop?',
    a: (
      <>
        Yes. I can build online shops and ordering pages, using Shopify or a custom build depending on what suits your business. Tell me what you sell and how you want customers to order, and I will recommend the right approach. You can see everything I offer on the{' '}
        <Link href="/services" className="font-semibold text-navy underline underline-offset-4 hover:text-teal-dark">services page</Link>.
      </>
    ),
    text: 'Yes. I can build online shops and ordering pages, using Shopify or a custom build depending on what suits your business. Tell me what you sell and how you want customers to order, and I will recommend the right approach. You can see everything I offer on the services page.',
  },
  {
    q: 'Do you work outside Surrey, or with international clients?',
    a: 'Yes. HK Creative is based in Surrey, UK, but I work with clients across the UK and internationally. Because web development and digital projects can be managed remotely, I can work with you wherever you are based.',
    text: 'Yes. HK Creative is based in Surrey, UK, but I work with clients across the UK and internationally. Because web development and digital projects can be managed remotely, I can work with you wherever you are based.',
  },
  {
    q: "What happens after I contact you?",
    a: "I will reply to arrange a short consultation, where we talk through your business, your current website and what you need. Then I put together a clear quote, so you know what you are getting before anything starts.",
    text: "I will reply to arrange a short consultation, where we talk through your business, your current website and what you need. Then I put together a clear quote, so you know what you are getting before anything starts.",
  },
  {
    q: "Can I update my website myself?",
    a: "It depends on how the website is built and what you need. I will explain how updates will work before the project starts, including whether you will be able to edit content yourself or would prefer me to handle changes for you.",
    text: "It depends on how the website is built and what you need. I will explain how updates will work before the project starts, including whether you will be able to edit content yourself or would prefer me to handle changes for you.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
}

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-cream py-20 lg:py-24 border-t border-hairline">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark mb-3">FAQ</p>
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
            Common questions.
          </h2>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-hairline">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-hairline">
                <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="shrink-0 text-xl leading-none text-teal-dark transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 pr-10 text-sm text-slate leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <p className="text-lg font-bold text-navy tracking-tight">Still have questions or ready to get started?</p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200"
              >
                Book a Consultation <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a
                href={`https://wa.me/${phone.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-7 rounded-md border border-navy/15 text-navy text-sm font-semibold hover:border-navy/40 hover:bg-white transition-colors duration-200"
              >
                Message me on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
