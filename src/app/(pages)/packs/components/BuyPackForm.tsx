'use client'

import { useActionState } from 'react'
import { startPackCheckout } from '../actions'

const BuyPackForm = ({ slug, priceLabel }: { slug: string; priceLabel: string }) => {
  const [state, action, pending] = useActionState(startPackCheckout, undefined)

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="slug" value={slug} />
      <label htmlFor="pack-email" className="text-default-700 text-sm font-medium">
        Tu email
      </label>
      <input
        id="pack-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="tu@email.com"
        className="border-default-200 focus:border-primary-8 rounded-xl border bg-white px-4 py-3 text-base outline-none"
      />
      <p className="text-default-500 text-sm">Usa el mismo email con el que te registrarás en la app: así el pack aparecerá solo en tu cuenta.</p>
      {state?.error ? <p className="text-sm font-medium text-red-600">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="bg-default-900 mt-2 rounded-full px-7.5 py-3.5 text-base font-medium text-white transition-transform hover:scale-95 disabled:opacity-60"
      >
        {pending ? 'Redirigiendo al pago…' : `Comprar por ${priceLabel}`}
      </button>
      <p className="text-default-500 text-xs">Pago seguro con Stripe: tarjeta, Bizum, Apple Pay o Google Pay.</p>
    </form>
  )
}

export default BuyPackForm
