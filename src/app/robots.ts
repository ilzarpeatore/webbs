import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/constants'

// Todo el sitio es público. Además de la regla general, se nombran los
// rastreadores de los asistentes de IA para dejar clara la intención: queremos
// que ChatGPT, Claude, Perplexity, Gemini… puedan leer y citar las páginas
// (sobre todo las landings de packs). Ver docs/LANDING_PACKS_ESTUDIO.md §8.
const AI_CRAWLERS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
