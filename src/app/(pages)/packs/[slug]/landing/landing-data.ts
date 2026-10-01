import { COACH_NAME, SITE_URL } from '@/config/constants'
import type { PackLanding } from '@/content/packs'
import { formatDuration, formatPrice, INCLUDE_LABEL, type Pack } from '@/utils/packsApi'

const UNIT_DAYS: Record<Pack['duration_unit'], number> = { day: 1, week: 7, month: 30, year: 365 }

/** "0,55 €" — anclaje honesto: el precio repartido por día de programa. */
export function pricePerDay(pack: Pack): string | null {
  const days = (pack.duration || 1) * (UNIT_DAYS[pack.duration_unit] ?? 30)
  if (!pack.price || days <= 1) return null
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: pack.currency || 'EUR', maximumFractionDigits: 2 }).format(pack.price / days)
}

/** Frases del resumen + la del precio, que sale siempre de los datos reales del pack. */
export function summaryWithPrice(landing: PackLanding, pack: Pack): string[] {
  return [
    ...landing.summary,
    `Cuesta ${formatPrice(pack)} en un único pago, sin suscripción, e incluye ${formatDuration(pack)} de acceso al programa en la app.`,
  ]
}

/**
 * Landing básica para un pack sin archivo de contenido en src/content/packs:
 * se construye con lo que el coach rellenó en el panel. Menos persuasiva que
 * una landing escrita a mano, pero coherente y con todas las secciones.
 */
export function genericLanding(pack: Pack): PackLanding {
  const duration = formatDuration(pack)
  const includes = pack.includes.map((i) => INCLUDE_LABEL[i])
  const description = pack.short_description || `Programa de ${duration} diseñado por un coach real y seguido desde la app de BeStronger.`

  return {
    slug: pack.slug,
    updatedAt: new Date().toISOString().slice(0, 10),
    accent: '#0283a7',
    audience: 'personas que quieren un programa de entrenamiento estructurado',
    seo: {
      title: `${pack.name}: programa de ${duration}`,
      description: description.slice(0, 155),
      keywords: [pack.name, 'programa de entrenamiento', 'entrenamiento online'],
    },
    hero: {
      eyebrow: `Programa de ${duration}`,
      title: pack.name,
      subtitle: description,
      bullets: [...includes, 'Seguimiento en la app de BeStronger'],
      sampleDay: {
        label: 'Tu plan, día a día',
        exercises: includes.map((name) => ({ name, dose: '✓' })),
        footnote: 'Todo organizado en tu calendario de la app.',
      },
    },
    summary: [`${pack.name} es un programa de ${duration} de BeStronger. ${description}`],
    facts: [
      { label: 'Duración', value: duration },
      { label: 'Formato', value: 'App BeStronger (iOS y Android)' },
      ...(includes.length ? [{ label: 'Incluye', value: includes.join(', ') }] : []),
    ],
    pain: { title: '', intro: '', points: [], turn: '' },
    whyFailed: { title: '', items: [] },
    method: { title: '', intro: '', pillars: [] },
    phases: { title: '', intro: '', items: [] },
    includes: {
      title: 'Todo lo que incluye',
      items: includes.map((title) => ({ icon: 'lucide:check-circle-2', title, text: '' })),
    },
    forWho: { yes: [], no: [] },
    evidence: { title: '', items: [] },
    testimonials: [],
    offer: {
      title: `Empieza hoy: ${pack.name}`,
      bullets: ['Pago único: sin suscripción ni permanencia', 'Empiezas el mismo día desde la app'],
    },
    faq: [
      {
        question: '¿Cómo lo recibo después de pagar?',
        answer:
          'Descarga la app de BeStronger y regístrate con el mismo email con el que pagaste. Al terminar el cuestionario inicial, el programa aparece en tu calendario. Si usas otro email, en el correo de compra tienes un código para activarlo.',
      },
      { question: '¿Es una suscripción?', answer: 'No. Es un pago único: no se renueva y no se te cobra nada más.' },
    ],
    finalCta: { title: `Empieza hoy ${pack.name}`, text: description },
  }
}

/** JSON-LD: Product + Offer, FAQPage y BreadcrumbList (sin valoraciones: solo con reseñas reales). */
export function landingJsonLd(landing: PackLanding, pack: Pack) {
  const url = `${SITE_URL}/packs/${pack.slug}`
  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: pack.name,
    description: landing.seo.description,
    url,
    ...(pack.image_url ? { image: [pack.image_url] } : {}),
    category: 'Programa de entrenamiento online',
    audience: { '@type': 'PeopleAudience', audienceType: landing.audience },
    brand: { '@type': 'Brand', name: 'BeStronger' },
    offers: {
      '@type': 'Offer',
      url,
      price: pack.price.toFixed(2),
      priceCurrency: pack.currency || 'EUR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'BeStronger', url: SITE_URL },
    },
    additionalProperty: landing.facts.map((f) => ({ '@type': 'PropertyValue', name: f.label, value: f.value })),
  }

  const faq = landing.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: landing.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'BeStronger', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Packs', item: `${SITE_URL}/packs` },
      { '@type': 'ListItem', position: 3, name: pack.name, item: url },
    ],
  }

  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    name: landing.seo.title,
    description: landing.seo.description,
    inLanguage: 'es-ES',
    dateModified: landing.updatedAt,
    mainEntity: { '@id': `${url}#product` },
    author: { '@type': 'Person', name: COACH_NAME, url: `${SITE_URL}/about` },
    publisher: { '@type': 'Organization', name: 'BeStronger', url: SITE_URL },
  }

  return [product, page, breadcrumbs, ...(faq ? [faq] : [])]
}
