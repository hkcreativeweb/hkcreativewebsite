import type { Metadata } from 'next'

export const SITE_URL = 'https://www.hkcreativeweb.com'
export const SITE_NAME = 'HK Creative Web'
export const DEFAULT_OG_IMAGE = '/og-image.png'

// Stable @ids so every page's structured data points at the same entities
export const BUSINESS_ID = `${SITE_URL}/#business`
export const PERSON_ID = `${SITE_URL}/#hamza`
export const WEBSITE_ID = `${SITE_URL}/#website`

/** Page metadata with a canonical URL and complete Open Graph / Twitter data (including an image). */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'website', siteName: SITE_NAME, locale: 'en_GB', images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
