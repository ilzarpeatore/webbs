import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const beneficios: FeatureCardProps[] = [
  {
    title: 'Más allá del peso',
    description: 'Medidas y % de grasa, además del peso, con tarjeta de último valor, diferencia respecto al anterior y gráfico de línea — el catálogo lo configura tu coach para ti.',
    bgClass: 'bg-primary-3',
    icon: 'lucide:ruler',
  },
  {
    title: 'Rendimiento como señal objetiva',
    description: 'Auto-regulación de carga: la app sugiere peso y repeticiones según tu rendimiento real pasado, pendientes de aprobación de tu coach. Mantener o mejorar tu fuerza cuenta, aunque la báscula apenas se mueva.',
    bgClass: 'bg-primary-6',
    icon: 'lucide:trending-up',
  },
  {
    title: 'Constancia medida de verdad',
    description: 'Porcentaje real de sesiones completadas frente a las programadas, mapa de calor de 21 días y rachas de hábitos calculadas en servidor, con racha combinada de todos tus hábitos activos.',
    bgClass: 'bg-primary-2',
    icon: 'lucide:calendar-check',
  },
  {
    title: 'Calorías ajustadas, no adivinadas',
    description: 'Comidas asignadas por tu coach para cada franja del día, con ajuste en vivo de si la combinación encaja con tu objetivo calórico — clave cuando ni te conviene mucho déficit ni mucho superávit.',
    bgClass: 'bg-primary-1',
    icon: 'lucide:utensils',
  },
]

const Beneficios = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-end gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <SectionBadge className="mb-3.5">Cómo lo mide la app</SectionBadge>
            <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">Datos objetivos para un proceso lento</h2>
          </div>
          <p className="text-default-600 text-lg leading-normal lg:w-md">Cuando los cambios tardan en notarse, tu coach y tú necesitáis algo más fiable que la sensación del día — así ajusta tu entrenamiento y tus comidas mientras avanzas.</p>
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
