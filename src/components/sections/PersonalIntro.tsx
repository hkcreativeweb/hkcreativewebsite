import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function PersonalIntro() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-teal-dark bg-mint border border-teal/20 rounded-full px-3 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          Currently accepting new projects
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
          Hi, I&apos;m Hamza.
        </h2>
        <p className="text-slate leading-relaxed mb-3">
          I build websites and digital experiences through HK Creative, working directly with individuals and small businesses. I enjoy taking an idea and turning it into something people can actually use, from the initial structure and design through to development and launch.
        </p>
        <p className="text-slate text-sm mb-8">
          Web Developer &middot; Freelance &middot; Creative
        </p>

        <div className="border-t border-hairline pt-8">
          <p className="text-navy font-semibold mb-1">Built by HK Creative</p>
          <p className="text-slate text-sm leading-relaxed mb-4 max-w-xl mx-auto">
            HK Creative is my freelance web development and creative work. I work directly with clients to design, build and improve websites and digital projects.
          </p>
          <p className="text-slate text-xs mb-6">
            Web Development &middot; Freelance &middot; Creative
          </p>
          <Link
            href="https://github.com/hkcreativeweb?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-teal-dark transition-colors duration-200"
          >
            View GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
