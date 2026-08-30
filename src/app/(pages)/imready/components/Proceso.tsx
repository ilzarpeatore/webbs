import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
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
    <div className="flex flex-col gap-5 pt-1 pb-16">
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

const methodSteps: FeatureCardProps[] = [
  { title: 'Recogida de información', description: 'A través del formulario de solicitud recopilo todo lo que necesito: tu historial físico, objetivos, disponibilidad, lesiones previas y contexto de vida. Sin atajos.', bgClass: 'bg-primary-8', icon: 'lucide:clipboard-list' },
  { title: 'Diseño del plan', description: 'Con esa información construyo tu plan a corto, medio y largo plazo. No se trata de entrenar más, sino de entrenar con sentido y en la dirección correcta.', bgClass: 'bg-default-900', icon: 'lucide:route' },
  { title: 'Informe inicial completo', description: 'Recibirás un documento detallado con tu procedimiento, la metodología que vamos a aplicar y las herramientas que utilizaremos para lograr tu objetivo.', bgClass: 'bg-primary-8', icon: 'lucide:file-text' },
  { title: 'Acceso a la aplicación', description: 'Desde el primer día tendrás acceso a la app donde encontrarás tu entrenamiento, el plan nutricional, hábitos y todos los recursos necesarios.', bgClass: 'bg-default-900', icon: 'lucide:smartphone' },
  { title: 'Puesta en marcha', description: 'Al comenzar los entrenamientos tendremos comunicación directa para hacer las primeras correcciones y adaptarnos el uno al otro. Esto es clave.', bgClass: 'bg-primary-8', icon: 'lucide:play' },
  { title: 'Feedback y ajuste semanal', description: 'Cada semana completarás un seguimiento en la app. Con esa información ajusto intensidad, series, repeticiones y carga. El plan evoluciona contigo.', bgClass: 'bg-default-900', icon: 'lucide:refresh-cw' },
]

const MethodStep = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {methodSteps.map((item, idx) => (
      <FeatureCard key={idx} {...item} />
    ))}
  </div>
)

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

const included: FeatureCardProps[] = [
  { title: 'Programación semanal', description: 'Tu programación se actualiza cada semana según tu progreso, fatiga y contexto: ajustes de cargas, variaciones y periodización inteligente.', bgClass: 'bg-primary-8', icon: 'lucide:calendar-check' },
  { title: 'Respuesta en menos de 24h', description: 'WhatsApp, app o email — tú eliges. Respuesta garantizada a cualquier duda, pregunta o consulta, sin demoras.', bgClass: 'bg-default-900', icon: 'lucide:message-circle' },
  { title: 'Llamada 1:1 quincenal', description: 'Una llamada de 10–20 minutos para revisar tu progreso y ajustar el plan contigo. Opcional, pero siempre disponible.', bgClass: 'bg-primary-8', icon: 'lucide:phone-call' },
  { title: 'Corrección técnica por vídeo', description: 'Envía vídeos de tus entrenamientos. Analizo tu técnica, identifico desajustes y te doy feedback específico para prevenir lesiones.', bgClass: 'bg-default-900', icon: 'lucide:video' },
  { title: 'Biblioteca de recursos', description: 'eBooks, vídeos y artículos sobre nutrición, recuperación y periodización — para entender el porqué detrás de cada decisión.', bgClass: 'bg-primary-8', icon: 'lucide:library' },
]

const IncludedStep = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {included.map((item, idx) => (
      <FeatureCard key={idx} {...item} />
    ))}
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
