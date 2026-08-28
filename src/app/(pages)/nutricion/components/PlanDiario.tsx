import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const planFeatures: FeatureCardProps[] = [
  {
    title: 'Objetivo diario de calorías y macros',
    description: 'Proteína, carbohidratos y grasas con progreso en tiempo real, repartidos en desayuno, comida, cena y snacks.',
    bgClass: 'bg-primary-3',
    icon: 'lucide:flame',
  },
  {
    title: 'Comidas asignadas por tu coach',
    description: 'Para cada franja del día, con una insignia que marca que las preparó específicamente para ti.',
    bgClass: 'bg-primary-2',
    icon: 'lucide:chef-hat',
  },
  {
    title: 'Ajuste en vivo al combinar opciones',
    description: 'La app te dice al momento si tu combinación encaja con tu objetivo, te faltan calorías o te pasas — antes de guardarla.',
    bgClass: 'bg-primary-6',
    icon: 'lucide:scale',
  },
  {
    title: 'Recetario con buscador',
    description: 'Catálogo general de recetas con filtros por tipo de comida, favoritos y rango de calorías, para completar lo que te apetezca.',
    bgClass: 'bg-primary-1',
    icon: 'lucide:search',
  },
]

const PlanDiario = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-end gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <SectionBadge className="mb-3.5">Tu plan diario</SectionBadge>
            <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">Nutrición con acompañamiento, no una dieta en PDF</h2>
          </div>
          <p className="text-default-600 text-lg leading-normal lg:w-md">La diferencia real frente a una dieta estática: cada comida queda registrada con fecha y con quién la asignó, y tu coach puede cambiar tus opciones cuando quiera.</p>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4">
          {planFeatures.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlanDiario
