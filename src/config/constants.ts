export const DEFAULT_PAGE_TITLE = 'BeStronger - Entrenamiento y nutrición online con coach real'

// Backend real (bckbs) -- el mismo que usa la app (ver bsa/api/client.ts).
// El blog se consume server-side (Server Components), así que esta URL
// nunca la ve el navegador del visitante y no hace falta CORS para ella.
export const API_BASE_URL = process.env.API_BASE_URL || 'https://testapp.bestronger.es/api'

// Dominio canónico del sitio, usado por metadataBase, el sitemap y robots.txt.
export const SITE_URL = (process.env.SITE_URL || 'https://bestronger.es').replace(/\/$/, '')

// Measurement ID de Google Analytics 4 (formato G-XXXXXXXXXX), desde el panel
// de administración de GA4. Vacío por defecto: si no se define, <GoogleAnalytics>
// no se renderiza y no se carga ningún script de tracking.
export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || ''

// Nombre legal del coach/titular, tal y como figura en el aviso legal y los
// términos y condiciones. Usado para el schema.org Person en /about y como
// autor de los artículos del blog.
export const COACH_NAME = 'Hamza Elouafa Lafjare'
