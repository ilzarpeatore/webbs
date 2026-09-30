import { API_BASE_URL } from '@/config/constants'

// Packs vendidos en la web (bckbs/docs/PACKS_WEB.md). Todo server-side: el
// navegador nunca llama al backend directamente, así que no hace falta CORS.

export type PackInclude = 'training' | 'nutrition' | 'habits' | 'resources'

export type Pack = {
  slug: string
  name: string
  short_description: string | null
  description: string | null
  image_url: string | null
  price: number
  currency: string
  duration: number
  duration_unit: 'day' | 'week' | 'month' | 'year'
  includes: PackInclude[]
}

export type CheckoutStatus =
  | { status: 'pending' }
  | { status: 'paid' | 'refunded'; email: string; pack: string; redeem_code: string; already_linked: boolean }

const REVALIDATE_SECONDS = 300

export async function getPackCatalog(): Promise<Pack[]> {
  const res = await fetch(`${API_BASE_URL}/pack-catalog`, { next: { revalidate: REVALIDATE_SECONDS } })
  if (!res.ok) {
    throw new Error(`pack-catalog respondió ${res.status}`)
  }
  return (await res.json()).data ?? []
}

export async function getPackBySlug(slug: string): Promise<Pack | null> {
  const url = new URL(`${API_BASE_URL}/pack-detail`)
  url.searchParams.set('slug', slug)
  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
  if (res.status === 404) return null
  if (!res.ok) {
    throw new Error(`pack-detail respondió ${res.status}`)
  }
  return (await res.json()).data ?? null
}

/** URL de Stripe Checkout para pagar un pack, o null si el backend lo rechaza. */
export async function createPackCheckout(slug: string, email?: string): Promise<string | null> {
  const res = await fetch(`${API_BASE_URL}/pack-checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ slug, email: email || undefined }),
    cache: 'no-store',
  })
  if (!res.ok) return null
  return (await res.json()).data?.url ?? null
}

export async function getCheckoutStatus(sessionId: string): Promise<CheckoutStatus | null> {
  const url = new URL(`${API_BASE_URL}/pack-checkout-status`)
  url.searchParams.set('session_id', sessionId)
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) return null
  return (await res.json()).data ?? null
}

const UNIT_LABEL: Record<Pack['duration_unit'], [string, string]> = {
  day: ['día', 'días'],
  week: ['semana', 'semanas'],
  month: ['mes', 'meses'],
  year: ['año', 'años'],
}

export function formatDuration(pack: Pack): string {
  const [one, many] = UNIT_LABEL[pack.duration_unit] ?? UNIT_LABEL.month
  return `${pack.duration} ${pack.duration === 1 ? one : many}`
}

export function formatPrice(pack: Pack): string {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: pack.currency || 'EUR' }).format(pack.price)
}

export const INCLUDE_LABEL: Record<PackInclude, string> = {
  training: 'Programa de entrenamiento',
  nutrition: 'Plan de nutrición',
  habits: 'Hábitos diarios',
  resources: 'Guías y recursos',
}
