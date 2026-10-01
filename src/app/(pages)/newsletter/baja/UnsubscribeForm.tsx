'use client'

import { useActionState } from 'react'
import { unsubscribeNewsletter } from '@/app/actions/marketing'

// Botón y no enlace directo: los antivirus de correo abren los enlaces de los
// emails y darían de baja a la gente sin querer.
export default function UnsubscribeForm({ token }: { token: string }) {
  const [state, action, pending] = useActionState(unsubscribeNewsletter, undefined)

  if (state?.ok) return <p className="text-default-900 mt-6 text-lg font-medium">{state.message}</p>

  return (
    <form action={action} className="mt-8">
      <input type="hidden" name="token" value={token} />
      <button type="submit" disabled={pending} className="bg-default-900 rounded-full px-7 py-3.5 font-medium text-white disabled:opacity-60">
        {pending ? 'Procesando…' : 'Darme de baja'}
      </button>
      {state?.error ? <p className="mt-3 text-sm font-medium text-red-600">{state.error}</p> : null}
    </form>
  )
}
