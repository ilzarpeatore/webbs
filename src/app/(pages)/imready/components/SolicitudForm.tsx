'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

/* EmailJS: sustituye estas tres constantes por tus credenciales reales de https://www.emailjs.com */
const EJS_PUBLIC_KEY = 'TU_PUBLIC_KEY'
const EJS_SERVICE_ID = 'TU_SERVICE_ID'
const EJS_TEMPLATE_ID = 'TU_TEMPLATE_ID'

declare const emailjs: {
  init: (opts: { publicKey: string }) => void
  send: (serviceId: string, templateId: string, data: Record<string, string>) => Promise<unknown>
}

type FieldKey = 'nombre' | 'email' | 'telefono' | 'redes' | 'experiencia' | 'competicion' | 'categoria' | 'nacimiento' | 'marcas' | 'objetivo' | 'porque'

type StepDef = {
  key: FieldKey
  question: string
  subtitle: string
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea'
  placeholder?: string
  optional?: boolean
  options?: string[]
  rows?: number
}

const steps: StepDef[] = [
  { key: 'nombre', question: '¿Cómo te llamas?', subtitle: 'Cuéntame con quién estoy hablando.', type: 'text', placeholder: 'Tu nombre completo' },
  { key: 'email', question: '¿Cuál es tu email?', subtitle: 'Para enviarte la confirmación y mantenernos en contacto.', type: 'email', placeholder: 'tu@email.com' },
  { key: 'telefono', question: '¿Y tu teléfono?', subtitle: 'Por si necesitamos hablar más rápido.', type: 'tel', placeholder: '+34 600 000 000' },
  { key: 'redes', question: '¿Tienes Instagram u otra red?', subtitle: 'Así puedo conocer un poco más tu contexto.', type: 'text', placeholder: '@tu_usuario', optional: true },
  { key: 'experiencia', question: '¿Cuánto llevas entrenando powerlifting?', subtitle: 'Así ajusto el punto de partida de tu plan.', type: 'select', options: ['Menos de 1 año', '1–2 años', '2–4 años', '+4 años'] },
  { key: 'competicion', question: '¿Compites o has competido?', subtitle: 'Me ayuda a calibrar el nivel de exigencia.', type: 'select', options: ['No todavía', 'Sí, a nivel regional', 'Sí, a nivel nacional', 'Sí, a nivel internacional'] },
  { key: 'categoria', question: '¿Cuál es tu categoría de peso corporal?', subtitle: 'Una referencia de tu peso de competición.', type: 'text', placeholder: 'Ej: -83 kg, -93 kg...' },
  { key: 'nacimiento', question: '¿En qué año naciste?', subtitle: 'Solo para ajustar el plan a tu edad.', type: 'number', placeholder: 'Ej: 1998' },
  { key: 'marcas', question: '¿Cuáles son tus mejores marcas?', subtitle: 'Sentadilla, press banca y peso muerto — en competición o en entreno.', type: 'textarea', placeholder: 'Sentadilla / Press banca / Peso muerto...', rows: 3 },
  { key: 'objetivo', question: '¿Cuál es tu objetivo principal?', subtitle: 'Cuéntamelo con tus propias palabras.', type: 'textarea', placeholder: 'Descríbeme qué quieres conseguir en powerlifting...', rows: 4 },
  { key: 'porque', question: '¿Por qué has decidido trabajar conmigo?', subtitle: 'Ayúdame a entender qué buscas en este proceso.', type: 'textarea', placeholder: '¿Qué te ha llevado a solicitar una plaza?', rows: 4 },
]

const emptyValues = steps.reduce((acc, s) => ({ ...acc, [s.key]: '' }), {} as Record<FieldKey, string>)

const SolicitudForm = () => {
  const [active, setActive] = useState(0)
  const [values, setValues] = useState<Record<FieldKey, string>>(emptyValues)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const touchStartX = useRef<number | null>(null)
  const stepRefs = useRef<Array<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>>([])

  const isLast = active === steps.length - 1

  useEffect(() => {
    stepRefs.current[active]?.focus()
  }, [active])

  const setValue = (key: FieldKey, value: string) => {
    setValues((p) => ({ ...p, [key]: value }))
    setError(false)
  }

  const currentIsValid = () => {
    const step = steps[active]
    return step.optional || values[step.key].trim().length > 0
  }

  const goNext = () => {
    if (!currentIsValid()) {
      setError(true)
      return
    }
    setError(false)
    setActive((a) => Math.min(steps.length - 1, a + 1))
  }

  const goPrev = () => {
    setError(false)
    setActive((a) => Math.max(0, a - 1))
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) goNext()
    else if (diff < -40) goPrev()
    touchStartX.current = null
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    const tag = (e.target as HTMLElement).tagName
    if (tag === 'SELECT' || tag === 'TEXTAREA') return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      goNext()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      goPrev()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLast) {
      goNext()
      return
    }
    if (!currentIsValid()) {
      setError(true)
      return
    }

    setSending(true)
    const datos = {
      ...values,
      redes: values.redes.trim() || '—',
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

  const inputCls = `text-default-900 placeholder:text-default-400 w-full border-0 border-b bg-transparent pb-3 text-lg transition-colors focus:outline-none ${error ? 'border-red-400' : 'border-default-300 focus:border-primary-9'}`
  const boxCls = `text-default-900 placeholder:text-default-400 w-full rounded-xl border bg-transparent px-4 py-3 text-base transition-colors focus:outline-none resize-y ${error ? 'border-red-400' : 'border-default-300 focus:border-primary-9'}`

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
    <div className="border-default-200 min-w-0 overflow-hidden rounded-2xl border bg-white p-6 shadow-xl lg:p-10" onKeyDown={onKeyDown}>
      <Script src="https://cdn.emailjs.com/dist/email.min.js" strategy="afterInteractive" />

      {/* Progreso */}
      <div className="mb-10 flex items-center gap-4">
        <div className="bg-default-200 h-0.5 w-full overflow-hidden rounded-full">
          <div className="bg-primary-9 h-full rounded-full transition-all duration-300" style={{ width: `${((active + 1) / steps.length) * 100}%` }} />
        </div>
        <span className="text-default-500 shrink-0 text-xs font-medium whitespace-nowrap">
          {active + 1}/{steps.length}
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Track deslizante */}
        <div className="min-w-0 overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ transform: `translateX(-${active * 100}%)` }}>
            {steps.map((step, idx) => (
              <div key={step.key} className="flex min-h-[200px] w-full shrink-0 flex-col gap-3 px-0.5">
                <label className="text-default-900 text-xl leading-snug font-medium md:text-2xl">
                  {step.question}
                  {step.optional && <span className="text-default-500 ml-2 text-sm font-normal">(opcional)</span>}
                </label>
                <p className="text-default-500 text-sm">{step.subtitle}</p>

                <div className="mt-3">
                  {step.type === 'select' ? (
                    <select
                      ref={(el) => {
                        stepRefs.current[idx] = el
                      }}
                      value={values[step.key]}
                      onChange={(e) => setValue(step.key, e.target.value)}
                      className={`${inputCls} appearance-none`}
                    >
                      <option value="" disabled>
                        Selecciona...
                      </option>
                      {step.options?.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : step.type === 'textarea' ? (
                    <textarea
                      ref={(el) => {
                        stepRefs.current[idx] = el
                      }}
                      value={values[step.key]}
                      onChange={(e) => setValue(step.key, e.target.value)}
                      placeholder={step.placeholder}
                      rows={step.rows ?? 3}
                      className={boxCls}
                    />
                  ) : (
                    <input
                      ref={(el) => {
                        stepRefs.current[idx] = el
                      }}
                      type={step.type}
                      value={values[step.key]}
                      onChange={(e) => setValue(step.key, e.target.value)}
                      placeholder={step.placeholder}
                      min={step.type === 'number' ? 1950 : undefined}
                      max={step.type === 'number' ? 2010 : undefined}
                      className={inputCls}
                    />
                  )}
                </div>

                {error && idx === active && <span className="text-sm font-medium text-red-500">Este campo es obligatorio para continuar.</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div className="mt-7.5 flex items-center justify-between gap-4">
          <button type="button" onClick={goPrev} className={`text-default-600 hover:text-default-900 text-sm font-medium transition-colors ${active === 0 ? 'pointer-events-none opacity-0' : ''}`}>
            ← Atrás
          </button>

          <button type="submit" disabled={sending} className="bg-default-900 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-xl transition-all hover:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100">
            {isLast ? (
              sending ? (
                'Enviando...'
              ) : (
                'Enviar solicitud'
              )
            ) : (
              <>
                Continuar <span aria-hidden>↵</span>
              </>
            )}
          </button>
        </div>

        {/* Ayuda de teclado */}
        <div className="border-default-100 text-default-400 mt-6 flex items-center justify-between border-t pt-4 text-[10px]">
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            <span aria-hidden>↑ ↓</span> para navegar
          </span>
          <span className="sm:hidden">Desliza para navegar</span>
          <span>
            {active + 1} de {steps.length}
          </span>
        </div>
      </form>
    </div>
  )
}

export default SolicitudForm
