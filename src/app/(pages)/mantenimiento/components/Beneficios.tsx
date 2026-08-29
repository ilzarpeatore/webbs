import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const beneficios: FeatureCardProps[] = [
  {
    title: 'Tu semana manda, no la rutina',
    description: 'Reorganiza tu entrenamiento arrastrándolo a otro día y se aplica al instante, o marca el día como no disponible para que tu coach lo revise. Pensado para tu vida real, no al revés.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:calendar-range',
  },
  {
    title: 'No desviarte poco a poco, sin darte cuenta',
    description: 'Tu objetivo de calorías y macros se calcula desde el primer momento, con las comidas que asigna tu coach y un ajuste en vivo de si esa combinación encaja con tu objetivo de mantenimiento.',
    bgClass: 'bg-default-900',
    icon: 'lucide:scale',
  },
  {
    title: 'Entrenar hoy sin pagarlo mañana',
    description: 'Si algo te duele entrenando, lo reportas al momento indicando tipo, zona e intensidad, y según la gravedad tu coach recibe una notificación automática — para sostener el entrenamiento a largo plazo.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:heart-pulse',
  },
  {
    title: 'La constancia como métrica, no el récord',
    description: 'Tu historial mide el porcentaje de sesiones completadas frente a las programadas. Para mantenimiento, sostener la constancia importa más que superarte cada semana.',
    bgClass: 'bg-default-900',
    icon: 'lucide:line-chart',
  },
]

const Beneficios = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-end gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <SectionBadge className="mb-3.5">Pensado para sostener, no solo para cambiar</SectionBadge>
            <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">Un sistema flexible en vez de una rutina fija e inflexible</h2>
          </div>
          <p className="text-default-600 text-lg leading-normal lg:w-md">Tu coach diseña tu plan de entrenamiento y nutrición. La app se ajusta a cómo llegas cada día y a los cambios de tu semana, para que mantener tu forma sea sostenible a largo plazo.</p>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Beneficios
