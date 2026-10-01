'use client'

import { useActionState } from 'react'
import { sendContactMessage } from '@/app/actions/marketing'
import AttributionFields from '@/components/shared/AttributionFields'

// Formulario de contacto: se guarda en el panel (Mensajes de contacto) y avisa
// por email al coach. Ver bckbs/docs/MARKETING_WEB.md.
export default function ContactFormFields() {
  const [state, action, pending] = useActionState(sendContactMessage, undefined)

  if (state?.ok) {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center gap-3 py-10">
        <h2 className="text-default-900 text-2xl font-medium">{state.message}</h2>
        <p className="text-default-600">Te contestaremos al email que nos has dejado.</p>
      </div>
    )
  }

  return (
    <form id="contact-form" action={action} className="space-y-3.5 md:space-y-8">
      <AttributionFields />
      {/* Trampa para bots: invisible para personas. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:gap-8">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-default-600 mb-2.5 text-sm font-medium">
            Tu nombre*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre completo"
            required
            className="bg-default-200/80 text-default-800 placeholder:text-default-600 w-full rounded-xl border-none px-5 py-4 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-default-600 mb-2.5 text-sm font-medium">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Tema de tu consulta"
            className="bg-default-200/80 text-default-800 placeholder:text-default-600 w-full rounded-xl border-none px-5 py-4 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-default-600 mb-2.5 text-sm font-medium">
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          required
          className="bg-default-200/80 text-default-800 placeholder:text-default-600 w-full rounded-xl border-none px-5 py-4 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-default-600 mb-2.5 text-sm font-medium">
          Mensaje*
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Escribe tu mensaje"
          required
          minLength={5}
          className="bg-default-200/80 text-default-800 placeholder:text-default-600 w-full resize-none rounded-xl border-none px-5 py-4 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
        ></textarea>
      </div>

      {state?.error ? <p className="text-sm font-medium text-red-600">{state.error}</p> : null}

      <div className="pt-4">
        <button type="submit" disabled={pending} className="bg-default-900 rounded-full px-8 py-4 font-medium text-white shadow-xl transition-all hover:scale-95 disabled:opacity-60">
          {pending ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  )
}
