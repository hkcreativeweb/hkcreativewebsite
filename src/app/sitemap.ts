import type { MetadataRoute } from 'next'
import { allProjects } from '@/data/projects'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/services`, priority: 0.9 },
    { url: `${SITE_URL}/portfolio`, priority: 0.9 },
    { url: `${SITE_URL}/about`, priority: 0.8 },
    { url: `${SITE_URL}/pricing`, priority: 0.7 },
    ...allProjects.map((p) => ({ url: `${SITE_URL}/work/${p.slug}`, priority: 0.7 })),
    { url: `${SITE_URL}/our-story`, priority: 0.6 },
  ]
}
