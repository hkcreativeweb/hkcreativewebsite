import { ArrowUpRight } from 'lucide-react'
import { instagram } from '@/data/instagram'
import { InstagramIcon } from '@/components/InstagramIcon'
import { getInstagramPosts } from '@/lib/instagram'

export async function InstagramFeed() {
  const posts = (await getInstagramPosts(6)).slice(0, 6)

  return (
    <section aria-labelledby="instagram-heading" className="bg-white py-20 lg:py-24 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark mb-3">
              <InstagramIcon /> @{instagram.handle}
            </p>
            <h2 id="instagram-heading" className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
              Follow HK Creative Web
            </h2>
            <p className="mt-3 text-slate leading-relaxed max-w-md">
              Websites, content and behind-the-scenes work, shared on Instagram.
            </p>
          </div>
          <a
            href={instagram.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-navy text-white text-sm font-semibold hover:bg-navy-dark transition-colors duration-200 shrink-0"
          >
            <InstagramIcon /> Follow on Instagram
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        {posts.length > 0 && (
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {posts.map((post) => (
              <li key={post.url}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-lg border border-hairline bg-cream"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.alt}
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 flex items-end justify-end p-3 bg-navy/0 group-hover:bg-navy/25 transition-colors duration-300">
                    <ArrowUpRight size={18} aria-hidden="true" className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                  <span className="sr-only">View post on Instagram (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
