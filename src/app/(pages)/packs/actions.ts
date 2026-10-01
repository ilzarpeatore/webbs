'use server'

import { redirect } from 'next/navigation'
import { createPackCheckout } from '@/utils/packsApi'
import { attributionFromForm } from '@/utils/webServer'

export type CheckoutState = { error?: string } | undefined

// Pública a propósito (no hay cuenta en la web): solo pide al backend la URL
// de Stripe Checkout para un pack; el precio y el pack los valida el backend.
export async function startPackCheckout(_prev: CheckoutState, formData: FormData): Promise<CheckoutState> {
  const slug = String(formData.get('slug') ?? '')
  const email = String(formData.get('email') ?? '').trim()

  if (!slug) {
    return { error: 'Pack no válido.' }
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Revisa el email.' }
  }

  let url: string | null = null
  try {
    url = await createPackCheckout(slug, email, await attributionFromForm(formData))
  } catch {
    url = null
  }
  if (!url) {
    return { error: 'No hemos podido iniciar el pago. Inténtalo de nuevo en unos minutos.' }
  }

  // Fuera del try: redirect() lanza una excepción controlada.
  redirect(url)
}
