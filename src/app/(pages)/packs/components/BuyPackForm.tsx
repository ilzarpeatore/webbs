'use client'

import { useActionState } from 'react'
import { startPackCheckout } from '../actions'

type BuyPackFormProps = {
  slug: string
  priceLabel: string
  /** Prefijo para los id: la landing pone el formulario varias veces. */
  idPrefix?: string
  /** Color del botón (por defecto, el oscuro del sitio). */
  accent?: string
  /** 'dark' = sobre fondo oscuro. */
  tone?: 'light' | 'dark'
  ctaLabel?: string
}

const BuyPackForm = ({ slug, priceLabel, idPrefix = 'pack', accent, tone = 'light', ctaLabel }: BuyPackFormProps) => {
  const [state, action, pending] = useActionState(startPackCheckout, undefined)
  const emailId = `${idPrefix}-email`
  const hintId = `${idPrefix}-email-hint`
  const dark = tone === 'dark'

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="slug" value={slug} />
      <label htmlFor={emailId} className={`text-sm font-medium ${dark ? 'text-white/80' : 'text-default-700'}`}>
        Tu email
      </label>
      <input
        id={emailId}
        name="email"
        type="email"
        autoComplete="email"
        placeholder="tu@email.com"
        aria-describedby={hintId}
        className="border-default-200 focus:border-primary-8 rounded-xl border bg-white px-4 py-3 text-base text-default-900 outline-none"
      />
      <p id={hintId} className={`text-sm ${dark ? 'text-white/60' : 'text-default-500'}`}>
        Usa el mismo email con el que te registrarás en la app: así el programa aparecerá solo en tu cuenta.
      </p>
      {state?.error ? <p className="text-sm font-medium text-red-500">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        style={accent ? { backgroundColor: accent } : undefined}
        className="bg-default-900 mt-1 rounded-full px-7.5 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[0.98] disabled:opacity-60"
      >
        {pending ? 'Redirigiendo al pago seguro…' : ctaLabel ? `${ctaLabel} · ${priceLabel}` : `Comprar por ${priceLabel}`}
      </button>
      <p className={`text-xs ${dark ? 'text-white/60' : 'text-default-500'}`}>Pago seguro con Stripe · Tarjeta, Apple Pay o Google Pay · Sin suscripción</p>
    </form>
  )
}

export default BuyPackForm
