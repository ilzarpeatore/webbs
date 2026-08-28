import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const niveles: FeatureCardProps[] = [
  {
    title: 'Cliente 1:1',
    description: 'Tu coach te diseña y ajusta tu plan de entrenamiento día a día. Ves "Mi plan de hoy" personalizado, no un catálogo genérico.',
    bgClass: 'bg-primary-3',
    icon: 'lucide:user-round-check',
  },
  {
    title: 'Cliente con paquete',
    description: 'Accedes a contenido según lo que incluya tu plan contratado, con la misma app y el mismo sistema de registro.',
    bgClass: 'bg-primary-6',
    icon: 'lucide:package',
  },
  {
    title: 'Acceso general',
    description: 'Nivel de entrada: catálogo de entrenamientos y recetas de calidad, con el mismo sistema de seguimiento de hábitos y progreso.',
    bgClass: 'bg-primary-2',
    icon: 'lucide:layout-grid',
  },
]

const Niveles = () => {
  return (
    <section className="pb-20 lg:pb-40">
      <div className="container">
        <div className="mb-12.5 lg:max-w-2xl">
          <SectionBadge className="mb-3.5">Niveles de cliente</SectionBadge>
          <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:text-5xl">El mismo sistema, distinto grado de personalización</h2>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3">
          {niveles.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Niveles
