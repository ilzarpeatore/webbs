'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { subscribeNewsletter } from '@/app/actions/marketing'
import AttributionFields from './AttributionFields'

type Props = {
  /** Origen del alta: footer, waitlist, pack:<slug>… (se ve en el panel). */
  source: string
  ctaLabel: string
  /** Clases del contenedor del formulario (cada sitio lo maqueta distinto). */
  className?: string
  inputClassName?: string
  buttonClassName?: string
}

// Alta en la newsletter con doble opt-in: el backend envía un email para
// confirmar (bckbs/docs/MARKETING_WEB.md).
export default function NewsletterForm({ source, ctaLabel, className, inputClassName, buttonClassName }: Props) {
  const [state, action, pending] = useActionState(subscribeNewsletter, undefined)

  if (state?.ok) {
    return (
      <p role="status" className="text-default-900 rounded-2xl bg-white px-5 py-4 text-base font-medium shadow-sm">
        {state.message}
      </p>
    )
  }

  return (
    <div>
      <form action={action} className={className}>
        <input type="hidden" name="source" value={source} />
        <AttributionFields />
        {/* Trampa para bots: invisible para personas. */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <label htmlFor={`newsletter-${source}`} className="sr-only">
          Tu email
        </label>
        <input id={`newsletter-${source}`} type="email" name="email" placeholder="Tu email" required autoComplete="email" className={inputClassName} />
        <button type="submit" disabled={pending} className={buttonClassName}>
          {pending ? 'Enviando…' : ctaLabel}
        </button>
      </form>
      {state?.error ? <p className="mt-2 text-sm font-medium text-red-600">{state.error}</p> : null}
      <p className="text-default-500 mt-2 text-xs">
        Te enviaremos un email para confirmar. Puedes darte de baja cuando quieras. Ver{' '}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          política de privacidad
        </Link>
        .
      </p>
    </div>
  )
}
