'use client'

import { useRef, useState } from 'react'
import Script from 'next/script'

/* EmailJS: sustituye estas tres constantes por tus credenciales reales de https://www.emailjs.com */
const EJS_PUBLIC_KEY = 'TU_PUBLIC_KEY'
const EJS_SERVICE_ID = 'TU_SERVICE_ID'
const EJS_TEMPLATE_ID = 'TU_TEMPLATE_ID'

declare const emailjs: {
  init: (opts: { publicKey: string }) => void
  send: (serviceId: string, templateId: string, data: Record<string, string>) => Promise<unknown>
}

const requiredFields = ['nombre', 'email', 'telefono', 'experiencia', 'competicion', 'categoria', 'nacimiento', 'marcas', 'objetivo', 'porque'] as const

const SolicitudForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const fields = {
    nombre: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    redes: useRef<HTMLInputElement>(null),
    telefono: useRef<HTMLInputElement>(null),
    experiencia: useRef<HTMLSelectElement>(null),
    competicion: useRef<HTMLSelectElement>(null),
    categoria: useRef<HTMLInputElement>(null),
    nacimiento: useRef<HTMLInputElement>(null),
    marcas: useRef<HTMLTextAreaElement>(null),
    objetivo: useRef<HTMLTextAreaElement>(null),
    porque: useRef<HTMLTextAreaElement>(null),
  }

  const clearError = (key: string) => setErrors((p) => ({ ...p, [key]: false }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, boolean> = {}
    let valid = true
    requiredFields.forEach((key) => {
      const el = fields[key].current
      if (!el?.value?.trim()) {
        newErrors[key] = true
        valid = false
      }
    })
    setErrors(newErrors)
    if (!valid) return

    setSending(true)
    const datos = {
      nombre: fields.nombre.current!.value.trim(),
      email: fields.email.current!.value.trim(),
      telefono: fields.telefono.current!.value.trim(),
      redes: fields.redes.current!.value.trim() || '—',
      experiencia: fields.experiencia.current!.value,
      competicion: fields.competicion.current!.value,
      categoria: fields.categoria.current!.value.trim(),
      nacimiento: fields.nacimiento.current!.value.trim(),
      marcas: fields.marcas.current!.value.trim(),
      objetivo: fields.objetivo.current!.value.trim(),
      porque: fields.porque.current!.value.trim(),
      fecha: new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }),
    }

    try {
      if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EJS_PUBLIC_KEY })
        await emailjs.send(EJS_SERVICE_ID, EJS_TEMPLATE_ID, datos)
      }
    } catch (err) {
      console.error('EmailJS error:', err)
    }
    setSending(false)
    setSubmitted(true)
  }

  const inputCls = (key: string) => `text-default-800 placeholder:text-default-500 w-full rounded-xl border-none px-5 py-3.5 transition-all focus:ring-2 focus:outline-none ${errors[key] ? 'bg-white ring-2 ring-red-400' : 'bg-default-200/80 focus:ring-slate-200'}`

  if (submitted) {
    return (
      <>
        <Script src="https://cdn.emailjs.com/dist/email.min.js" strategy="afterInteractive" />
        <div className="border-default-200 flex flex-col items-center gap-4 rounded-2xl border bg-white p-10 text-center shadow-xl">
          <div className="bg-primary-9/15 text-primary-9 flex size-14 items-center justify-center rounded-full text-2xl">✓</div>
          <h3 className="text-default-900 text-2xl font-medium md:text-3xl">Solicitud enviada.</h3>
          <p className="text-default-600 max-w-[36ch] text-sm leading-relaxed">
            He recibido tu solicitud. La revisaré personalmente y te contactaré en un máximo de <strong className="text-default-900">48 horas</strong>.
          </p>
        </div>
      </>
    )
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl lg:p-10">
      <Script src="https://cdn.emailjs.com/dist/email.min.js" strategy="afterInteractive" />
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-default-600 text-sm font-medium">Nombre completo</label>
            <input ref={fields.nombre} type="text" placeholder="Tu nombre" className={inputCls('nombre')} onChange={() => clearError('nombre')} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-default-600 text-sm font-medium">Email</label>
            <input ref={fields.email} type="email" placeholder="tu@email.com" className={inputCls('email')} onChange={() => clearError('email')} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-default-600 text-sm font-medium">
              Instagram / Redes <span className="text-default-500 font-normal">(opcional)</span>
            </label>
            <input ref={fields.redes} type="text" placeholder="@tu_usuario" className={inputCls('redes')} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-default-600 text-sm font-medium">Teléfono</label>
            <input ref={fields.telefono} type="tel" placeholder="+34 600 000 000" className={inputCls('telefono')} onChange={() => clearError('telefono')} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-default-600 text-sm font-medium">¿Cuánto llevas entrenando powerlifting?</label>
            <select ref={fields.experiencia} defaultValue="" className={`${inputCls('experiencia')} appearance-none`} onChange={() => clearError('experiencia')}>
              <option value="" disabled>
                Selecciona...
              </option>
              <option>Menos de 1 año</option>
              <option>1–2 años</option>
              <option>2–4 años</option>
              <option>+4 años</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-default-600 text-sm font-medium">¿Compites o has competido?</label>
            <select ref={fields.competicion} defaultValue="" className={`${inputCls('competicion')} appearance-none`} onChange={() => clearError('competicion')}>
              <option value="" disabled>
                Selecciona...
              </option>
              <option>No todavía</option>
              <option>Sí, a nivel regional</option>
              <option>Sí, a nivel nacional</option>
              <option>Sí, a nivel internacional</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-default-600 text-sm font-medium">Categoría de peso corporal</label>
            <input ref={fields.categoria} type="text" placeholder="Ej: -83 kg, -93 kg..." className={inputCls('categoria')} onChange={() => clearError('categoria')} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-default-600 text-sm font-medium">Año de nacimiento</label>
            <input ref={fields.nacimiento} type="number" placeholder="Ej: 1998" min={1950} max={2010} className={inputCls('nacimiento')} onChange={() => clearError('nacimiento')} />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-default-600 text-sm font-medium">Mejores marcas</label>
            <textarea ref={fields.marcas} placeholder="Sentadilla / Press banca / Peso muerto — indica si son en competición o en entreno" rows={2} className={`${inputCls('marcas')} min-h-[70px] resize-y`} onChange={() => clearError('marcas')} />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-default-600 text-sm font-medium">¿Cuál es tu objetivo principal?</label>
            <textarea ref={fields.objetivo} placeholder="Descríbeme qué quieres conseguir en powerlifting..." rows={3} className={`${inputCls('objetivo')} min-h-[80px] resize-y`} onChange={() => clearError('objetivo')} />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-default-600 text-sm font-medium">¿Por qué has decidido trabajar conmigo?</label>
            <textarea ref={fields.porque} placeholder="¿Qué te ha llevado a solicitar una plaza?" rows={3} className={`${inputCls('porque')} min-h-[80px] resize-y`} onChange={() => clearError('porque')} />
          </div>
        </div>

        <button type="submit" disabled={sending} className="bg-default-900 mt-5 w-full rounded-full px-8 py-4 font-medium text-white shadow-xl transition-all hover:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100">
          {sending ? 'Enviando...' : 'Enviar solicitud'}
        </button>
        <p className="text-default-500 mt-4 text-center text-xs">Te contactaré en un máximo de 48h para confirmar disponibilidad.</p>
      </form>
    </div>
  )
}

export default SolicitudForm
