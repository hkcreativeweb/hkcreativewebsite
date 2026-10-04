export interface InstagramPost {
  url: string
  image: string
  alt: string
}

interface GraphMedia {
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url?: string
  thumbnail_url?: string
  permalink: string
  caption?: string
}

/**
 * Latest posts from the Instagram API (Instagram API with Instagram Login).
 * Needs INSTAGRAM_ACCESS_TOKEN (server-side env var). Without it, or if the request fails,
 * returns no posts and the section shows only the heading and Follow button (the page never breaks).
 */
export async function getInstagramPosts(limit = 6): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  if (!token) return []

  try {
    const url = `https://graph.instagram.com/me/media?fields=media_type,media_url,thumbnail_url,permalink,caption&limit=${limit}&access_token=${token}`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const json = (await res.json()) as { data?: GraphMedia[] }
    const posts = (json.data ?? [])
      .map((m) => ({
        url: m.permalink,
        image: (m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url) ?? '',
        alt: m.caption ? m.caption.replace(/\s+/g, ' ').slice(0, 120) : 'Instagram post from @hkcreativeweb',
      }))
      .filter((p) => p.image)
    return posts
  } catch {
    return []
  }
}
