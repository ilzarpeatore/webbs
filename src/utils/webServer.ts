import { createHash } from 'node:crypto'
import { headers } from 'next/headers'
import { API_BASE_URL } from '@/config/constants'

// Utilidades de SERVIDOR para hablar con el backend en nombre del visitante
// (bckbs/docs/MARKETING_WEB.md). Nunca importar desde un componente de cliente.
//
// - WEB_SERVER_KEY: clave compartida con el backend. Con ella el backend
//   acepta la IP real del visitante (X-Client-IP) para sus límites de
//   peticiones y acepta las visitas de la analítica.
// - ANALYTICS_SALT: secreto para el hash diario anónimo del visitante.

const WEB_SERVER_KEY = process.env.WEB_SERVER_KEY || ''
const ANALYTICS_SALT = process.env.ANALYTICS_SALT || WEB_SERVER_KEY || 'bestronger'

export type Attribution = {
  visitor_hash?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  click_id_type?: string
  referrer_host?: string
  landing_path?: string
}

export const CLICK_ID_PARAMS = ['gclid', 'fbclid', 'ttclid', 'msclkid', 'li_fat_id'] as const

export async function clientInfo(): Promise<{ ip: string; userAgent: string; dnt: boolean }> {
  const h = await headers()
  const forwarded = h.get('x-forwarded-for') || ''
  const ip = (forwarded.split(',')[0] || h.get('x-real-ip') || '').trim()
  return {
    ip,
    userAgent: h.get('user-agent') || '',
    dnt: h.get('dnt') === '1' || h.get('sec-gpc') === '1',
  }
}

/**
 * Identificador anónimo del visitante: hash de IP + navegador + una sal que
 * cambia cada día. No se guarda la IP ni se usa ninguna cookie, y el mismo
 * visitante tiene otro hash al día siguiente (no se le puede seguir).
 */
export function visitorHash(ip: string, userAgent: string, date = new Date()): string {
  const day = date.toISOString().slice(0, 10)
  return createHash('sha256').update(`${ANALYTICS_SALT}|${day}|${ip}|${userAgent}`).digest('hex').slice(0, 32)
}

const BOT_RE = /bot|crawl|spider|slurp|preview|facebookexternalhit|embedly|whatsapp|telegram|headless|lighthouse|pingdom|uptime|monitor|curl|wget|python|axios|node-fetch|go-http/i

export function isBot(userAgent: string): boolean {
  return !userAgent || BOT_RE.test(userAgent)
}

export function deviceOf(userAgent: string): 'mobile' | 'tablet' | 'desktop' {
  if (/ipad|tablet|(android(?!.*mobile))/i.test(userAgent)) return 'tablet'
  if (/mobi|iphone|android/i.test(userAgent)) return 'mobile'
  return 'desktop'
}

export function browserOf(userAgent: string): string {
  if (/edg\//i.test(userAgent)) return 'Edge'
  if (/opr\/|opera/i.test(userAgent)) return 'Opera'
  if (/samsungbrowser/i.test(userAgent)) return 'Samsung'
  if (/firefox|fxios/i.test(userAgent)) return 'Firefox'
  if (/chrome|crios/i.test(userAgent)) return 'Chrome'
  if (/safari/i.test(userAgent)) return 'Safari'
  return 'Otro'
}

/** Atribución a partir de una URL (UTM y clic de anuncio) y del referrer. */
export function attributionFrom(url: URL, referrer: string | null, siteHost: string): Attribution {
  const p = url.searchParams
  const pick = (k: string) => p.get(k)?.trim().slice(0, 160) || undefined
  const clickId = CLICK_ID_PARAMS.find((k) => p.get(k))
  let referrerHost: string | undefined
  try {
    const host = referrer ? new URL(referrer).hostname.replace(/^www\./, '') : ''
    referrerHost = host && host !== siteHost.replace(/^www\./, '') ? host : undefined
  } catch {
    referrerHost = undefined
  }
  return {
    utm_source: pick('utm_source'),
    utm_medium: pick('utm_medium'),
    utm_campaign: pick('utm_campaign'),
    utm_content: pick('utm_content'),
    utm_term: pick('utm_term'),
    click_id_type: clickId,
    referrer_host: referrerHost,
    landing_path: url.pathname,
  }
}

/** Atribución que mandan los formularios (campos ocultos rellenados en el navegador). */
export async function attributionFromForm(formData: FormData): Promise<Attribution> {
  const { ip, userAgent } = await clientInfo()
  const get = (k: string) => {
    const v = formData.get(`attr_${k}`)
    return typeof v === 'string' && v.trim() ? v.trim().slice(0, 190) : undefined
  }
  const clickId = get('click_id_type')
  return {
    visitor_hash: ip ? visitorHash(ip, userAgent) : undefined,
    utm_source: get('utm_source'),
    utm_medium: get('utm_medium'),
    utm_campaign: get('utm_campaign'),
    utm_content: get('utm_content'),
    utm_term: get('utm_term'),
    click_id_type: clickId && (CLICK_ID_PARAMS as readonly string[]).includes(clickId) ? clickId : undefined,
    referrer_host: get('referrer_host'),
    landing_path: get('landing_path'),
  }
}

/** POST al backend en nombre del visitante (con su IP real y la clave de la web). */
export async function backendPost(path: string, body: unknown): Promise<Response> {
  const { ip } = await clientInfo()
  return fetch(`${API_BASE_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(WEB_SERVER_KEY ? { 'X-Web-Key': WEB_SERVER_KEY } : {}),
      ...(ip ? { 'X-Client-IP': ip } : {}),
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  })
}
