export const DEFAULT_PAGE_TITLE = 'BeStronger - Entrenamiento y nutrición online con coach real'

// Backend real (bckbs) -- el mismo que usa la app (ver bsa/api/client.ts).
// El blog se consume server-side (Server Components), así que esta URL
// nunca la ve el navegador del visitante y no hace falta CORS para ella.
export const API_BASE_URL = process.env.API_BASE_URL || 'https://testapp.bestronger.es/api'

// Dominio canónico del sitio, usado por metadataBase, el sitemap y robots.txt.
// Provisional: hoy es el subdominio de Vercel. Cuando se migre a
// bestronger.es, basta con fijar SITE_URL en las variables de entorno del
// hosting -- no hace falta tocar código en ningún sitio.
export const SITE_URL = (process.env.SITE_URL || 'https://webbs-fdeg.vercel.app').replace(/\/$/, '')
