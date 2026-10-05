// Single source of truth for project information: homepage "Selected work", /portfolio and the /work/[slug] case studies.
// Only add information that is true. Optional sections (challenge, built, results, gallery) are simply not shown when absent.
// Screenshots live in /public/images.

export interface ResultGroup {
  name: string
  note?: string
  metrics: { label: string; value: string }[]
}

export interface WebsiteProject {
  slug: string
  title: string
  type: string
  description: string
  overview: string
  /** Search/social description, when the overview is too long for a snippet */
  metaDescription?: string
  /** What I did on the project (shown on the case study and used in structured data) */
  services?: string[]
  challenge?: string
  /** What was actually built / done */
  built?: string
  features: string[]
  /** Documented results only (e.g. supported by screenshots) */
  results?: ResultGroup[]
  resultsNote?: string
  url?: string
  image?: string
  alt?: string
  /** Supporting screenshots shown on the case-study page */
  gallery?: { src: string; alt: string }[]
  technologies: string[]
}

export const featuredProject: WebsiteProject = {
  slug: 'fuel-crisis-england',
  title: 'Fuel Crisis England',
  type: 'Informative website',
  description: 'UK fuel price, tax and cost-of-living data in one place, with an interactive cost breakdown and weekly updates from official sources.',
  overview: 'An informative website that makes UK fuel prices, tax and cost-of-living data easy to follow, using official government and ONS data.',
  built: 'The full website: a fuel price tracker, an interactive cost breakdown tool and pages that explain taxes, costs and sources, with European price comparison.',
  features: [
    'Live UK fuel price tracking',
    'Interactive cost breakdown tool',
    'Official government and ONS data',
    'Weekly price updates',
  ],
  url: 'https://www.fuelcrisisengland.co.uk/',
  image: '/images/portfolio/fce-home.webp',
  alt: 'Fuel Crisis England website homepage',
  services: ['Website design', 'Web development'],
  technologies: ['Next.js', 'React', 'Tailwind'],
}

const sterlingTransfers: WebsiteProject = {
  slug: 'sterling-transfers',
  title: 'Sterling Transfers',
  type: 'Transport website',
  description: 'Airport and private transfers with a two-step quote request.',
  overview: 'A website for a Surrey-based pre-booked and pre-paid airport and private transfer business, built around a clear quote request and straightforward booking terms.',
  built: 'The full website: airport and private transfer pages, a two-step quote request form and a how-it-works page, with the pre-payment terms explained clearly.',
  features: [
    'Two-step quote request form',
    'Separate airport and private transfer pages',
    'How-it-works explanation of the booking process',
    'Clear pre-payment terms shown throughout',
  ],
  url: 'https://sterling-transfers.vercel.app/',
  image: '/images/portfolio/sterling-transfers.webp',
  alt: 'Sterling Transfers website homepage',
  metaDescription: 'A website for a Surrey-based pre-booked airport and private transfer business, built around a clear quote request and straightforward booking terms.',
  services: ['Website design', 'Web development'],
  technologies: ['Next.js', 'Tailwind'],
}

const renovationResolutionProject: WebsiteProject = {
  slug: 'renovation-resolution',
  title: 'Renovation Resolution',
  type: 'Construction & renovation website',
  description: 'A UK renovation and construction company website covering services, projects and finance options, with clear calls to action.',
  overview: 'A website for a UK renovation and construction company, built to present its services and completed projects and to turn visitors into quote requests.',
  built: 'The full website: service pages, a projects gallery, finance and FAQ pages and enquiry forms, designed to work across phones, tablets and desktops.',
  features: [
    'Service-focused page structure',
    'Projects gallery presenting completed work',
    'Finance and FAQ pages',
    'Contact and quote enquiry forms',
    'Responsive, mobile-friendly design',
  ],
  url: 'https://renovation-resolution1.vercel.app/',
  image: '/images/portfolio/renovation-resolution.jpg',
  alt: 'Renovation Resolution website homepage',
  services: ['Website design', 'Web development'],
  technologies: ['Next.js', 'React', 'Tailwind'],
}

const hotFoodHouse: WebsiteProject = {
  slug: 'hot-food-house',
  title: 'Hot Food House',
  type: 'Takeaway website (demo)',
  description: 'Halal takeaway menu, deals and basket preview.',
  overview: 'A demo website for a halal takeaway, with a full menu, deals and a basket preview. Online ordering and payments are switched off until a provider and the business details are connected.',
  built: 'The full demo site, including menu and deals pages and a basket and checkout preview. Features stay hidden until the real business details exist.',
  features: [
    'Menu and deals pages',
    'Basket and checkout preview',
    'Halal information shown on the site',
    'Features stay hidden until the business details exist',
  ],
  url: 'https://hot-food-house.vercel.app/',
  image: '/images/portfolio/hot-food-house.webp',
  alt: 'Hot Food House website homepage',
  metaDescription: 'A demo website for a halal takeaway with a full menu, deals and a basket preview. Online ordering stays switched off until a provider is connected.',
  services: ['Website design', 'Web development'],
  technologies: ['Next.js', 'Plain CSS'],
}

/** Homepage "Selected work": one featured project plus supporting projects. */
export const supportingProjects: WebsiteProject[] = [sterlingTransfers, renovationResolutionProject]

export const tiktokCampaign: WebsiteProject = {
  slug: 'local-restaurant-tiktoks',
  title: 'Local Restaurant TikToks',
  type: 'Social media content',
  description: 'Short-form TikTok videos for local food businesses, published in March 2025.',
  overview: 'TikTok videos featuring three local food businesses, published in March 2025. The engagement figures below are taken from the screenshots shown.',
  features: [],
  services: ['Short-form social video', 'Social content'],
  technologies: [],
  resultsNote: 'Likes, comments, saves and shares are taken directly from the screenshots shown. View counts are as recorded by HK Creative and are not visible in the screenshots.',
  results: [
    { name: "Pathaan's", note: 'Afghan & Pakistani cuisine', metrics: [
      { label: 'Views', value: '100k+' }, { label: 'Likes', value: '3,627' }, { label: 'Comments', value: '130' }, { label: 'Saves', value: '970' }, { label: 'Shares', value: '1,885' },
    ] },
    { name: 'Adore Kitchen', note: 'British Asian kitchen, Harrow', metrics: [
      { label: 'Views', value: '70k+' }, { label: 'Likes', value: '2,607' }, { label: 'Comments', value: '102' }, { label: 'Saves', value: '833' }, { label: 'Shares', value: '1,944' },
    ] },
    { name: 'Cookie Jar London', note: 'Artisan cookies, Slough', metrics: [
      { label: 'Views', value: '85k+' }, { label: 'Likes', value: '2,961' }, { label: 'Comments', value: '35' }, { label: 'Saves', value: '628' }, { label: 'Shares', value: '1,520' },
    ] },
  ],
  gallery: [
    { src: '/images/social-pathaans.jpeg', alt: "TikTok screenshot: Pathaan's video with 3,627 likes, 130 comments, 970 saves and 1,885 shares" },
    { src: '/images/social-adore.jpeg', alt: 'TikTok screenshot: Adore Kitchen video with 2,607 likes, 102 comments, 833 saves and 1,944 shares' },
    { src: '/images/social-cookiejar.jpeg', alt: 'TikTok screenshot: Cookie Jar London video with 2,961 likes, 35 comments, 628 saves and 1,520 shares' },
  ],
}

/** Every project that has a /work/[slug] case study page. */
export const allProjects: WebsiteProject[] = [featuredProject, ...supportingProjects, hotFoodHouse, tiktokCampaign]

export const getProject = (slug: string) => allProjects.find((p) => p.slug === slug)

// Listed on /portfolio without a case-study page.
export interface ListedProject {
  title: string
  type: string
  description: string
  url: string
  technologies: string[]
  image: string
  alt: string
}

export const eidProject: ListedProject = {
  title: 'Eid 2026',
  type: 'Informative Website',
  description: 'An informative site covering the dates, history, traditions and facts of Eid al-Fitr and Eid al-Adha 2026, with a quiz and games.',
  url: 'https://eid-website-2026.vercel.app/',
  image: '/images/portfolio/eid-2026.webp',
  alt: 'Eid 2026 website preview',
  technologies: ['Next.js', 'React'],
}

export const templateProject: ListedProject = {
  title: 'Premium Business Template',
  type: 'Reusable Website Template',
  description: 'A lightweight, config-driven website template that can be customised for any local business without touching components.',
  url: 'https://premium-business-template-phi.vercel.app/',
  image: '/images/portfolio/template.webp',
  alt: 'Premium Business Template demo preview',
  technologies: ['Next.js', 'TypeScript'],
}
