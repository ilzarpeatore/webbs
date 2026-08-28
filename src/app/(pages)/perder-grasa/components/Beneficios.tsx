import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const beneficios: FeatureCardProps[] = [
  {
    title: 'Tu punto de partida, calculado',
    description: 'Tras tus datos personales, la app calcula tu metabolismo basal (BMR) y tu gasto calórico total (TDEE) y te propone un primer plan de calorías y macros antes de confirmar tu plan.',
    bgClass: 'bg-primary-3',
    icon: 'lucide:calculator',
  },
  {
    title: 'Sabes si encaja, antes de añadirla',
    description: 'Al combinar las opciones de comida que te prepara tu coach para cada franja del día, la app calcula al momento si esa combinación se ajusta a tu objetivo calórico, te faltan kcal o te pasas.',
    bgClass: 'bg-primary-1',
    icon: 'lucide:utensils',
  },
  {
    title: 'Que perder grasa no sea perder fuerza',
    description: 'La auto-regulación sugiere el peso y las repeticiones de hoy según tu rendimiento real pasado, pendiente de aprobación de tu coach — para vigilar tu fuerza con datos mientras estás en déficit.',
    bgClass: 'bg-primary-6',
    icon: 'lucide:dumbbell',
  },
  {
    title: 'Progreso medido, no solo la báscula del día',
    description: 'Peso y medidas corporales configurados por tu coach, con el último valor, el cambio respecto al anterior y un gráfico de línea para ver la evolución real de tu proceso.',
    bgClass: 'bg-primary-2',
    icon: 'lucide:line-chart',
  },
]

const Beneficios = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-end gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <SectionBadge className="mb-3.5">Cómo se sostiene el déficit</SectionBadge>
            <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">Cuatro señales objetivas, no solo fuerza de voluntad</h2>
          </div>
          <p className="text-default-600 text-lg leading-normal lg:w-md">Tu coach diseña el plan de calorías, comidas y entrenamiento. La app te muestra en tiempo real si lo estás cumpliendo, para que el déficit sea sostenible en vez de un cálculo a ciegas.</p>
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
