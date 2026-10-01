import type { MetadataRoute } from 'next'
import { allProjects } from '@/data/projects'

const baseUrl = 'https://hkcreativeweb.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...allProjects.map((p) => ({ url: `${baseUrl}/work/${p.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${baseUrl}/our-story`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
