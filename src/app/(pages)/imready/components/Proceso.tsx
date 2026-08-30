'use client'

import { Icon } from '@iconify/react'
import { useRef, useState } from 'react'
import SolicitudForm from './SolicitudForm'

type TimelineStepProps = {
  num: number
  label: string
  children: React.ReactNode
  id?: string
}

const TOTAL_STEPS = 5

const TimelineStep = ({ num, label, children, id }: TimelineStepProps) => (
  <div id={id} className="grid gap-x-4 lg:gap-x-6" style={{ gridTemplateColumns: '32px 1fr' }}>
    <div className="flex flex-col items-center">
      <div className="border-primary-9/45 text-primary-9 z-[2] flex size-7 shrink-0 items-center justify-center rounded-full border bg-white text-[10px] font-semibold">{num}</div>
      {num < TOTAL_STEPS && <div className="from-primary-9/25 mt-2 w-px flex-1 bg-gradient-to-b to-transparent" />}
    </div>
    <div className="flex min-w-0 flex-col gap-5 pt-1 pb-16">
      <span className="text-primary-9 text-[0.64rem] font-semibold tracking-[0.28em] uppercase">{label}</span>
      {children}
    </div>
  </div>
)

const IntroStep = () => (
  <div className="flex flex-col gap-4 rounded-2xl bg-white p-7.5 shadow-xl">
    <p className="text-default-700 text-[15px] leading-relaxed">Be Stronger es el servicio de asesoramiento con el que he ayudado a más de 100 personas, de forma online y presencial, tanto a mejorar su condición física y rendimiento como a recuperarse de sus lesiones.</p>
    <p className="text-default-600 text-[15px] leading-relaxed">El servicio combina una programación personalizada, análisis técnico detallado y seguimiento continuo para garantizar que cada persona alcance sus objetivos de forma segura y sostenible.</p>
    <p className="text-default-600 text-[15px] leading-relaxed">Ya sea que busques optimizar tu rendimiento, recuperarte de una lesión o simplemente sentirte mejor en tu cuerpo, tengo un plan adaptado para ti.</p>
  </div>
)

type MethodItem = { num: string; tag: string; title: string; body: string }

const methodItems: MethodItem[] = [
  { num: '01', tag: 'Punto de partida', title: 'Recogida de información', body: 'Antes de diseñar nada, necesito conocerte a fondo. A través del formulario de solicitud recopilo todo lo que necesito: tu historial físico, objetivos, disponibilidad, lesiones previas y contexto de vida. Sin atajos.' },
  { num: '02', tag: 'Estrategia', title: 'Diseño del plan', body: 'Con esa información construyo tu plan a corto, medio y largo plazo. Cada fase tiene un propósito concreto: no se trata de entrenar más, sino de entrenar con sentido y en la dirección correcta.' },
  { num: '03', tag: 'Claridad total', title: 'Informe inicial completo', body: 'Recibirás un documento detallado donde se refleja tu procedimiento, la metodología que vamos a aplicar y las herramientas que utilizaremos para lograr tu objetivo. Nada queda en el aire.' },
  { num: '04', tag: 'Tu espacio de trabajo', title: 'Acceso a la aplicación', body: 'Desde el primer día tendrás acceso a la app donde encontrarás tu entrenamiento, el plan nutricional, hábitos y todos los recursos necesarios. Todo en un solo lugar, siempre actualizado.' },
  { num: '05', tag: 'Adaptación inicial', title: 'Puesta en marcha', body: 'Una vez comiences con los entrenamientos tendremos comunicación directa para realizar las primeras correcciones y cambios con el fin de adaptarnos el uno al otro. Esto es clave.' },
  { num: '06', tag: 'Mejora continua', title: 'Feedback y ajuste semanal', body: 'Cada semana completarás un formulario de seguimiento en la app. Con esa información ajusto la intensidad, series, repeticiones y carga de cada ejercicio. El plan evoluciona contigo, no al revés.' },
]

const MethodStep = () => {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () => setActive((a) => Math.max(0, a - 1))
  const next = () => setActive((a) => Math.min(methodItems.length - 1, a + 1))

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    touchStartX.current = null
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="min-w-0 overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ transform: `translateX(-${active * 100}%)` }}>
          {methodItems.map((item) => (
            <div key={item.num} className="flex w-full shrink-0 flex-col gap-4 rounded-2xl bg-white p-7.5 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-heading text-primary-9/25 text-4xl leading-none font-bold md:text-5xl">{item.num}</span>
                <span className="border-primary-9/25 text-primary-9 rounded-full border px-3 py-1 text-[9px] font-semibold tracking-[0.14em] uppercase">{item.tag}</span>
              </div>
              <h3 className="text-default-900 text-xl leading-snug font-medium md:text-2xl">{item.title}</h3>
              <p className="text-default-600 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {methodItems.map((item, i) => (
            <button key={item.num} onClick={() => setActive(i)} aria-label={`Ir al paso ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'bg-primary-9 w-5' : 'bg-default-200 w-1.5'}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} disabled={active === 0} aria-label="Paso anterior" className="border-default-200 text-default-600 flex size-9 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30">
            <Icon icon="lucide:arrow-left" className="size-4" />
          </button>
          <button
            onClick={next}
            disabled={active === methodItems.length - 1}
            aria-label="Siguiente paso"
            className={`flex size-9 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 ${active === methodItems.length - 1 ? 'border-default-200 text-default-600' : 'bg-primary-9/15 border-primary-9/25 text-primary-9'}`}
          >
            <Icon icon="lucide:arrow-right" className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

const resources = [
  { day: 'Día 1', title: 'Guideline personal detallado', body: 'Tu informe personal y los detalles de tu programación y metodología de entrenamiento. Un documento de referencia que explica el porqué de cada decisión.' },
  { day: 'Día 2', title: 'Autogestión durante el entrenamiento', body: 'Cómo ajustar cargas y descansos durante la puesta en marcha. Aprenderás a leer tu propio cuerpo y tomar decisiones inteligentes dentro de la sesión.' },
  { day: 'Día 7', title: 'Guía de hábitos', body: 'El entrenamiento no lo es todo. Un plan detallado para tu mejor versión: sueño, estrés, rutinas y hábitos que potencian cada sesión.' },
  { day: 'Día 15', title: 'Guía de descanso activo y deload', body: 'Cuándo y cómo reducir la carga para que tu cuerpo asimile el trabajo y llegues más fuerte a cada nueva fase.' },
]

const ResourcesStep = () => (
  <div className="relative flex flex-col gap-0 overflow-hidden rounded-2xl bg-white shadow-xl">
    {resources.map((item) => (
      <div key={item.day} className="border-default-200 flex gap-5 border-b p-6 last:border-b-0">
        <div className="w-[72px] shrink-0 pt-[3px]">
          <span className="border-primary-9/25 text-primary-9 rounded-full border px-2 py-1 text-[9px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap">{item.day}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-default-900 text-lg font-medium">{item.title}</h4>
          <p className="text-default-600 max-w-[60ch] text-[13px] leading-relaxed">{item.body}</p>
        </div>
      </div>
    ))}
    <div className="from-body-bg pointer-events-none absolute inset-x-0 bottom-0 flex h-32 flex-col items-center justify-end bg-gradient-to-t to-transparent pb-5">
      <p className="text-default-600 max-w-[38ch] px-4 text-center text-[11px] leading-relaxed">A medida que avance tu asesoría irás recibiendo más recursos adaptados a tus necesidades específicas y al momento de tu proceso.</p>
    </div>
  </div>
)

const IncludedTag = ({ children }: { children: React.ReactNode }) => <span className="border-default-200 text-default-600 self-start rounded-full border px-3 py-1 text-[9px] font-semibold tracking-[0.18em] uppercase">{children}</span>

const weeklyProgress = [
  { week: 'Semana 1', load: '80%' },
  { week: 'Semana 2', load: '85%' },
  { week: 'Semana 3', load: '90%' },
]

const traits = [
  { title: 'Transparencia', body: 'Te digo qué funciona, qué no, y por qué. Feedback honesto siempre.' },
  { title: 'Adaptabilidad', body: 'Planes rígidos no funcionan. Nos ajustamos a tu vida, no al revés.' },
  { title: 'Educación', body: 'Aprenderás por qué hacemos cada cosa. Serás más autónomo con el tiempo.' },
]

const techChecklist = ['Posición', 'Rango de movimiento', 'Alineación']

const resourceLibrary = [
  { icon: '📖', name: 'eBooks', count: '8+' },
  { icon: '🎥', name: 'Vídeos', count: '20+' },
  { icon: '📝', name: 'Artículos', count: '15+' },
]

const IncludedStep = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-7.5 shadow-xl">
      <IncludedTag>Personalización</IncludedTag>
      <h3 className="text-default-900 text-xl leading-snug font-medium md:text-2xl">
        Cada semana,
        <br />
        un paso adelante.
      </h3>
      <p className="text-default-600 text-sm leading-relaxed">Tu programación se actualiza semanalmente basándose en tu progreso, fatiga y contexto. Ajustes de cargas, variaciones de ejercicios y periodización inteligente para máximos resultados.</p>
      <div className="bg-primary-9/8 border-primary-9/15 mt-auto rounded-xl border p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-default-500 text-[10px] font-semibold tracking-[0.14em] uppercase">Progresión semanal</span>
          <span className="bg-primary-9/15 text-primary-9 rounded px-2 py-1 text-[9px] font-semibold">+5% carga</span>
        </div>
        {weeklyProgress.map((r) => (
          <div key={r.week} className="mb-2 flex items-center gap-2 last:mb-0">
            <span className="text-default-500 w-20 text-[11px] font-medium">{r.week}</span>
            <div className="bg-primary-9/15 h-1 flex-1 rounded-full">
              <div className="bg-primary-9 h-full rounded-full" style={{ width: r.load }} />
            </div>
            <span className="text-primary-9 text-[10px] font-semibold">{r.load}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-4 rounded-2xl bg-white p-7.5 shadow-xl">
      <IncludedTag>Comunicación</IncludedTag>
      <h3 className="text-default-900 text-xl leading-snug font-medium md:text-2xl">
        Respuestas en
        <br />
        menos de 24 horas.
      </h3>
      <p className="text-default-600 text-sm leading-relaxed">WhatsApp, app o email. Tú eliges. Garantizado: respuesta en menos de 24 horas a cualquier duda, pregunta o consulta. Sin demoras, sin excusas.</p>
      <div className="bg-default-100 mt-auto flex flex-col gap-2 rounded-xl p-3">
        <div className="flex justify-end">
          <div className="bg-primary-9 max-w-[80%] rounded-2xl px-3 py-2 text-[11px] text-white">Hoy no me va a dar tiempo a entrenar toda la hora...</div>
        </div>
        <div className="flex justify-start">
          <div className="text-default-700 max-w-[80%] rounded-2xl bg-white px-3 py-2 text-[11px] shadow-sm">No te preocupes, te adapto ahora mismo el entrenamiento a 40 minutos</div>
        </div>
        <div className="flex justify-end">
          <div className="bg-primary-9 max-w-[80%] rounded-2xl px-3 py-2 text-[11px] text-white">Si puedes estaría genial, gracias!</div>
        </div>
        <div className="text-default-500 pt-1 text-center text-[9px]">Respuesta típica en &lt;24h</div>
      </div>
    </div>

    <div className="flex flex-col gap-4 rounded-2xl bg-white p-7.5 shadow-xl lg:row-span-2">
      <IncludedTag>Relación coach-persona</IncludedTag>
      <h3 className="text-default-900 text-xl leading-snug font-medium md:text-2xl">
        Somos un equipo,
        <br />
        <span className="text-primary-9">no un servicio.</span>
      </h3>
      <p className="text-default-600 text-sm leading-relaxed">Tu objetivo es mi objetivo. Cada decisión se toma pensando en tu contexto, tus limitaciones y tu visión a largo plazo. Sin atajos, con criterio.</p>
      <div className="bg-primary-9/8 border-primary-9/15 flex items-center gap-3 rounded-xl border px-4 py-3">
        <span className="bg-primary-9 size-2 shrink-0 animate-pulse rounded-full" />
        <span className="text-default-700 text-xs font-medium">Llamada 1:1 quincenal (opcional)</span>
        <span className="text-primary-9 ml-auto text-xl font-semibold">
          10–20<span className="text-default-500 text-[11px] font-medium"> min</span>
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {traits.map((item) => (
          <div key={item.title} className="border-primary-9/30 flex flex-col gap-0.5 border-l-2 pl-3">
            <strong className="text-default-900 text-sm font-semibold">{item.title}</strong>
            <span className="text-default-600 text-xs leading-relaxed">{item.body}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-4 rounded-2xl bg-white p-7.5 shadow-xl">
      <IncludedTag>Análisis</IncludedTag>
      <h3 className="text-default-900 text-xl leading-snug font-medium md:text-2xl">
        Correcciones
        <br />
        por vídeo.
      </h3>
      <p className="text-default-600 text-sm leading-relaxed">Envía vídeos de tus entrenamientos. Analizo tu técnica frame by frame, identifico desajustes y te doy feedback específico. Prevención de lesiones garantizada.</p>
      <div className="bg-default-100 mt-auto rounded-xl p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="bg-primary-9 flex size-8 items-center justify-center rounded-full text-sm">📹</div>
          <span className="text-default-700 text-[11px] font-semibold">Análisis técnico</span>
        </div>
        {techChecklist.map((a) => (
          <div key={a} className="flex items-center justify-between py-1.5 text-[10px]">
            <span className="text-default-600">{a}</span>
            <Icon icon="lucide:check" className="text-primary-2 size-3.5" />
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-4 rounded-2xl bg-white p-7.5 shadow-xl">
      <IncludedTag>Recursos</IncludedTag>
      <h3 className="text-default-900 text-xl leading-snug font-medium md:text-2xl">
        Biblioteca de
        <br />
        conocimiento.
      </h3>
      <p className="text-default-600 text-sm leading-relaxed">eBooks, vídeos, artículos sobre nutrición, recuperación y periodización. Todo lo que necesitas para entender el "por qué" detrás de cada decisión de tu programa.</p>
      <div className="mt-auto flex flex-col gap-2">
        {resourceLibrary.map((res) => (
          <div key={res.name} className="bg-default-100 flex items-center justify-between rounded-lg p-2.5">
            <div className="flex items-center gap-2">
              <span className="text-lg">{res.icon}</span>
              <span className="text-default-700 text-[11px] font-medium">{res.name}</span>
            </div>
            <span className="text-primary-9 text-[10px] font-semibold">{res.count}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const Proceso = () => {
  return (
    <section id="process" className="py-12.5 md:py-16 lg:py-25">
      <div className="container">
        <p className="text-default-500 mb-2 text-[0.65rem] font-semibold tracking-[0.35em] uppercase">El proceso</p>
        <h2 className="text-default-900 mb-12.5 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-5xl">
          Cinco pasos para <span className="text-primary-9">empezar.</span>
        </h2>

        <div className="flex flex-col">
          <TimelineStep num={1} label="Conoce el método">
            <IntroStep />
          </TimelineStep>
          <TimelineStep num={2} label="Cómo funciona el proceso">
            <MethodStep />
          </TimelineStep>
          <TimelineStep num={3} label="Cuéntame tu caso" id="form">
            <SolicitudForm />
          </TimelineStep>
          <TimelineStep num={4} label="Recursos extra">
            <ResourcesStep />
          </TimelineStep>
          <TimelineStep num={5} label="Qué incluye el coaching">
            <IncludedStep />
          </TimelineStep>
        </div>
      </div>
    </section>
  )
}

export default Proceso
