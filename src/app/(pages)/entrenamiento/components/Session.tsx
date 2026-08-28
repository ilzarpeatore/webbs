import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const sessionFeatures: FeatureCardProps[] = [
  {
    title: 'Series, carga y RIR/RPE',
    description: 'Cada serie tiene su objetivo marcado por tu coach. Al completarla se guarda al momento en el servidor, no al terminar el entrenamiento.',
    bgClass: 'bg-primary-3',
    icon: 'lucide:check-check',
  },
  {
    title: 'Descansos con cuenta atrás',
    description: 'Con opción de saltar. En iPhone, además se ve en la pantalla de bloqueo con el objetivo de la siguiente serie (Live Activity).',
    bgClass: 'bg-primary-6',
    icon: 'lucide:timer',
  },
  {
    title: 'Reporte de dolor por ejercicio',
    description: 'Indicas tipo, zona e intensidad desde la propia sesión. Según la gravedad, tu coach recibe una notificación automática.',
    bgClass: 'bg-primary-1',
    icon: 'lucide:heart-pulse',
  },
  {
    title: 'Minimiza sin perder la sesión',
    description: 'Puedes salir a hacer otra cosa en la app: una barra flotante te devuelve exactamente a donde lo dejaste.',
    bgClass: 'bg-primary-2',
    icon: 'lucide:minimize-2',
  },
]

const Session = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-end gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <SectionBadge className="mb-3.5">Dentro de una sesión</SectionBadge>
            <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">Nada depende de que lo recuerdes al final del día</h2>
          </div>
          <p className="text-default-600 text-lg leading-normal lg:w-md">Antes de entrenar respondes un chequeo corto de cómo llegas hoy (sueño, agujetas, energía, estrés). Luego, cada bloque de ejercicios se registra celda a celda.</p>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4">
          {sessionFeatures.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Session
