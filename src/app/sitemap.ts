import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/constants'
import { getPostList } from '@/utils/blogApi'

export const revalidate = 3600

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/home', priority: 1, changeFrequency: 'weekly' },
  { path: '/entrenamiento', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nutricion', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/habitos', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/progreso', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/como-funciona', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/para-quien-es', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/comparativa', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faqs', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/download', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/waitlist', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'daily' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms-and-conditions', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/legal-notice', priority: 0.2, changeFrequency: 'yearly' },
]

// Los posts del blog se piden al backend real (bckbs) -- si no responde
// (mantenimiento, red), el sitemap sigue generándose solo con las rutas
// estáticas en vez de romper la ruta entera.
async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const entries: MetadataRoute.Sitemap = []
    let page = 1
    let totalPages = 1

    do {
      const { data, pagination } = await getPostList({ page })
      for (const post of data) {
        entries.push({
          url: `${SITE_URL}/blog/${post.slug}`,
          lastModified: post.updated_at ? new Date(post.updated_at) : undefined,
          changeFrequency: 'monthly',
          priority: 0.6,
        })
      }
      totalPages = pagination.totalPages
      page += 1
    } while (page <= totalPages && page <= 20)

    return entries
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const blogEntries = await getBlogEntries()

  return [...staticEntries, ...blogEntries]
}
