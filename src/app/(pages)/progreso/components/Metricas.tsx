import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const metricas: FeatureCardProps[] = [
  {
    title: 'Métricas corporales',
    description: 'Peso y medidas que tu coach configura para ti, con último valor, diferencia respecto al anterior y gráfico de línea.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:ruler',
  },
  {
    title: 'Rendimiento por ejercicio',
    description: 'Automático, desde las series que registras entrenando: evolución de carga y mejores marcas (1RM estimado).',
    bgClass: 'bg-default-900',
    icon: 'lucide:trending-up',
  },
  {
    title: 'Constancia',
    description: 'Porcentaje real de sesiones completadas frente a las programadas, con un mapa de 21 días.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:calendar-check',
  },
  {
    title: '6 informes de estadísticas',
    description: 'Series por grupo muscular, balance muscular, mapa de calor corporal, ejercicios más frecuentes, mejores marcas y resumen mensual.',
    bgClass: 'bg-default-900',
    icon: 'lucide:bar-chart-3',
  },
]

const Metricas = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-end gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <SectionBadge className="mb-3.5">Qué mide la app</SectionBadge>
            <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">Una foto objetiva de cómo vas de verdad</h2>
          </div>
          <p className="text-default-600 text-lg leading-normal lg:w-md">Tu coach usa las mismas estadísticas para decidir el siguiente bloque de tu plan — sin tener que pedirte esa información aparte.</p>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4">
          {metricas.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metricas
