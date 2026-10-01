'use server'

import { attributionFromForm, backendPost } from '@/utils/webServer'

// Formularios públicos de la web → backend (bckbs/docs/MARKETING_WEB.md).

export type FormState = { ok?: boolean; message?: string; error?: string } | undefined

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribeNewsletter(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get('email') ?? '').trim()
  const source = String(formData.get('source') ?? 'footer').trim() || 'footer'
  if (!EMAIL_RE.test(email)) return { error: 'Revisa el email.' }

  try {
    const res = await backendPost('newsletter-subscribe', {
      email,
      source,
      website: String(formData.get('website') ?? ''),
      attribution: await attributionFromForm(formData),
    })
    if (res.status === 429) return { error: 'Demasiados intentos. Prueba de nuevo en un minuto.' }
    if (!res.ok) return { error: 'No hemos podido apuntarte. Inténtalo de nuevo en unos minutos.' }
    const status = (await res.json()).data?.status
    return status === 'confirmed'
      ? { ok: true, message: 'Ya estabas suscrito. ¡Gracias!' }
      : { ok: true, message: 'Casi listo: te hemos enviado un email para confirmar tu suscripción.' }
  } catch {
    return { error: 'No hemos podido apuntarte. Inténtalo de nuevo en unos minutos.' }
  }
}

export async function sendContactMessage(_prev: FormState, formData: FormData): Promise<FormState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const subject = String(formData.get('subject') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  if (!name) return { error: 'Escribe tu nombre.' }
  if (!EMAIL_RE.test(email)) return { error: 'Revisa el email.' }
  if (message.length < 5) return { error: 'Escribe tu mensaje.' }

  try {
    const res = await backendPost('contact-message', {
      name,
      email,
      subject: subject || null,
      message,
      website: String(formData.get('website') ?? ''),
      attribution: await attributionFromForm(formData),
    })
    if (res.status === 429) return { error: 'Demasiados intentos. Prueba de nuevo en un minuto.' }
    if (!res.ok) return { error: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo o escríbenos por email.' }
    return { ok: true, message: '¡Mensaje enviado! Te responderemos lo antes posible.' }
  } catch {
    return { error: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo o escríbenos por email.' }
  }
}

export async function confirmNewsletter(token: string): Promise<{ status?: string; source?: string; unsubscribe_token?: string } | null> {
  try {
    const res = await backendPost('newsletter-confirm', { token })
    return res.ok ? ((await res.json()).data ?? null) : null
  } catch {
    return null
  }
}

export async function unsubscribeNewsletter(_prev: FormState, formData: FormData): Promise<FormState> {
  const token = String(formData.get('token') ?? '')
  try {
    const res = await backendPost('newsletter-unsubscribe', { token })
    if (!res.ok) return { error: 'El enlace no es válido o ya no está activo.' }
    return { ok: true, message: 'Te has dado de baja. No recibirás más emails nuestros.' }
  } catch {
    return { error: 'No hemos podido procesar la baja. Inténtalo de nuevo en unos minutos.' }
  }
}
