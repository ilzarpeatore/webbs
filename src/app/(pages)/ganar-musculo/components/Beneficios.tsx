import FeatureCard, { FeatureCardProps } from '@/components/shared/FeatureCard'
import SectionBadge from '@/components/shared/SectionBadge'

const beneficios: FeatureCardProps[] = [
  {
    title: 'Progresión de carga con aprobación de tu coach',
    description: 'El peso y las repeticiones sugeridas para tu próxima sesión se calculan según tus series completadas y el RIR/RPE registrado la última vez. Queda pendiente hasta que tu coach lo aprueba.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:trending-up',
  },
  {
    title: 'Balance muscular y series por grupo',
    description: 'Series totales por grupo muscular comparadas con el periodo anterior, radar de balance muscular compartible y mapa de calor corporal navegable semana a semana.',
    bgClass: 'bg-default-900',
    icon: 'lucide:bar-chart-3',
  },
  {
    title: 'Mejores marcas y 1RM estimado',
    description: 'Cada sesión queda en tu historial con peso, reps y RIR/RPE, y se marca automáticamente cuando bates un récord personal, con 1RM estimado por ejercicio.',
    bgClass: 'bg-primary-8',
    icon: 'lucide:trophy',
  },
  {
    title: 'Comidas para sostener tu superávit',
    description: 'Tu coach te prepara las comidas de cada franja del día, con ajuste en vivo de si la combinación encaja con tu objetivo calórico, sin tener que calcular tú los números.',
    bgClass: 'bg-default-900',
    icon: 'lucide:utensils',
  },
]

const Beneficios = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="mb-12.5 grid grid-cols-1 items-end gap-3.5 md:grid-cols-2 lg:gap-8">
          <div>
            <SectionBadge className="mb-3.5">Pensado para hipertrofia</SectionBadge>
            <h2 className="text-default-900 text-3xl leading-tight font-medium md:text-4xl lg:w-lg lg:text-5xl">No solo &ldquo;come más y entrena más&rdquo;</h2>
          </div>
          <p className="text-default-600 text-lg leading-normal lg:w-md">Ganar músculo exige subir la carga y el volumen semana a semana, y saber si tu superávit calórico se sostiene. Aquí lo ves con datos, no con la corazonada.</p>
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
